import React, { useState } from 'react';
import styles from './Nav.module.css'
import { useAuth0 } from "@auth0/auth0-react";

const Nav = (props) => {
  const [isProfileVisible, setProfileVisible] = useState(false);

  const showProfile = () => {
    setProfileVisible(true);
  };

  const hideProfile = () => {
    setProfileVisible(false);
  };

  const { logout, loginWithRedirect, user, isAuthenticated } = useAuth0();

  return (
    <nav>

      {isProfileVisible && (
        <div className={styles.profile}>
          <div className={styles.box}>
            <img onClick={hideProfile} className={styles.back} src="images/icons/back.png" alt="" />
            <h3>Profile</h3>
          </div>

          <div className={styles.userinfo}>
            <img className={styles.user} src={user.picture} />

            <div className={styles.text}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          </div>

          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Sign out</button>
        </div>
      )}

      <div className={styles.logo} onClick={() => props.handleshow(true)}>
        <img src="images/favicon/logo.png" />

        <a href='/'> <h4>Watches</h4></a>
      </div>

      <ul>
        <li>Latest</li>
        <li>About</li>
        <li>Feedback</li>
        <li>Contact</li>
      </ul>

      <div className={styles.btn}>


        {isAuthenticated ?
          <>
            <div className={styles.shopcart}>
              <a href="/cart" onClick={() => props.handleshow(false)}><img src="images/icons/cart-icon.png" alt="" /></a>
            <sup>{props.count}</sup>
            </div>
            <img onClick={showProfile} className={styles.userloggedin} src={user.picture} />
          </>
          :
          <>
            <a onClick={() => alert("To utilize the cart, you must first log in.")}>
              <img src="images/icons/cart-icon.png" alt="" /></a>
            <img className={styles.user} onClick={() => loginWithRedirect()} src="images/icons/signin-icon.png" alt="" />
          </>
        }

      </div>


    </nav>
  )
}

export default Nav
