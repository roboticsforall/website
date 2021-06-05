using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;


public class LaunchProjectile : MonoBehaviour
{
   // Create bullet and give it a value to be launched
   public GameObject projectile;
   float launchVelocity = 1000f;
   // times that the user sets for reloading and unlimited ammo time frame
   [SerializeField] float currentTime;
   float timeRemaining;
   [SerializeField] float unlimitedTime;
    // standard ammo in launcher
   float ammo = 10;
   // give the user a huge amount of ammo so it is basically unlimited
   float ammoU = 1000000;


   // Call Shoot() so that bullet is created whenever the buttton is pressed
   public void ShootGun()
   {
      Shoot();
   }

    // Call UnlimitedAmmo() so that bullet is created whenever the buttton is pressed
   public void unlimited()
   {
      UnlimitedAmmo();
   }

   void Update()
   {
       // when the user runs out of ammo, intiate the reload process
       if (ammo == 0){
            if(timeRemaining > 0){
                timeRemaining -= Time.deltaTime;
                Reload();
            }
       }
       // reset the timer when firing so that the user does not have to reload
       else if(ammo == 10){
           timeRemaining = currentTime;
       }
        // subtract time from unlimitedTime so that the user does not always 
        // have unlimited ammo
        if (ammoU < 1000000){
            if(unlimitedTime > 0){
                    unlimitedTime -= Time.deltaTime;
                    
            }
        }
        // if the user is in the unlimited state, the ammo in the regular launcher
        // is always 0
       if(unlimitedTime > 0 && unlimitedTime < 10 )
       {
           ammo = 0;
       }

   }

   void Reload(){
       // when the reload timer has ran out, give the user full ammo and reset the 
       // timer that countdowns relaod
       if (timeRemaining <= 0)
        {
            ammo = 10;
            currentTime = 3f;
        }
        
   }

   void Shoot()
   {
        if (ammo > 0){
             // Created a bullet and launch it with launchVelcoity 
            GameObject ball = Instantiate(projectile, transform.position, transform.rotation);
            ball.GetComponent<Rigidbody>().AddRelativeForce(new Vector3  (0,0, launchVelocity));
            // Subtract 1 from the ammo ammount so there isn't unlimited ammo always
            ammo -= 1;
                
        }
   }

   void UnlimitedAmmo()
   {
       if (unlimitedTime > 0){
           // set ammo of the regular firing to 0 so that the user can not alternate
           // between the two buttons for more ammo
           ammo = 0;
            if (ammoU > 10000){
                // Created a bullet and launch it with launchVelcoity 
                GameObject ball = Instantiate(projectile, transform.position, transform.rotation);
                ball.GetComponent<Rigidbody>().AddRelativeForce(new Vector3  (0,0, launchVelocity));
                ammoU -= 1;
            }
            
        }
        // if the time frame for unlimited time is over, set the ammo for the regular
        // firing back to its original value
        else{
            ammo = 10;
        }
   }
}