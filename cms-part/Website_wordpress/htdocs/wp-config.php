<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'medt');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'c?cPEfL{TAh>HiGK$NR{ecqYQ(Et#Pn[L_:Qr7|wT<GcbXrBhW!GBj[0&2.-AYx/');
define('SECURE_AUTH_KEY',  '.!Flj!rp6MEUzXcn%|&};ky^^i(wBA3)D`Nw|,ga;TSmfIynC[[ouLo-kD[7KUO9');
define('LOGGED_IN_KEY',    'F&+aft .GHTWx5?~YPFA@$f*b&<[1SCFsEtF &Q|IcwS28y?2fe?8UzoXv&tGYq^');
define('NONCE_KEY',        '[>Ilxe1z|uGM;7E5eB*#[Y5O>s)Z7G~p4H8v9:L+7:R&%u>PJ{<@24e$ 2E/VhrY');
define('AUTH_SALT',        '`E|(CO4,O(fKRu5G;80v++q2`r,8336->sSnLj.G=[E&.qBmx` (Bma<oXpzv#A&');
define('SECURE_AUTH_SALT', '#~_3,5zfs`;bb3#1IY=w$hC)W>KVuSN&ZTK#QDjyrKU:uRsM4InngW09|T{r _,J');
define('LOGGED_IN_SALT',   'aLX@lENQ{&{9(~bIDZ)=I]h7,&`>HQb>mX84*^yD=*g8.Dz8(IoWG+cA#Y>c+sqX');
define('NONCE_SALT',       '9$y d2O]KR%8KI,EIgz),V/RMJN7v<yQo3avWVxQ!jf`Eu2f9DJ2p<E()yUS7cw3');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
