module.exports = [
  {
    label: 'Home',
    subMenu: [],
  },
  {
    label: 'Account',
    subMenu: [
      {
        label: 'User Dashboard',
        subMenu: [
          { label: 'Dashboard', path: '/dashboard' },
          { label: 'Profile', path: '/profile' },
          { label: 'My Listing', path: '/my-listing' },
          { label: 'Favourites', path: '/favourites' },
          { label: 'Add Listings', path: '/add-listings' },
          { label: 'Messages', path: '/messages' },
          { label: 'Login', path: '/login' },
        ],
      },
      {
        label: 'User Profile',
        path: '/user-profile',
      },
    ],
  },
  {
    label: 'Our Cars',
    subMenu: [
      {
        label: 'Listing Styles',
        subMenu: [
          {
            label: 'Listing v2',
            path: '/listing-v2',
          },
        ],
      },

      {
        label: 'Listing Single',
        subMenu: [
          {
            label: 'Listing Single v1',
            path: '/listing-single-v1',
          },
        ],
      },
      {
        label: 'Add Listing',
        path: '/add-listings',
      },
    ],
  },

  {
    label: 'Shop',
    subMenu: [
      {
        label: 'Shop',
        path: '/shop',
      },
      {
        label: 'Shop Single',
        path: '/shop-single',
      },
      {
        label: 'Cart',
        path: '/cart',
      },
      {
        label: 'Checkout',
        path: '/checkout',
      },
      {
        label: 'Complete Order',
        path: '/complete-order',
      },
    ],
  },
  {
    label: 'Pages',
    subMenu: [
      {
        label: 'About Us',
        path: '/about-us',
      },
      {
        label: 'Compare',
        path: '/compare',
      },
      {
        label: 'Contact',
        path: '/contact',
      },
      {
        label: 'Error',
        path: '/error',
      },
      {
        label: 'Faq',
        path: '/faq',
      },
      {
        label: 'Login',
        path: '/login',
      },
      {
        label: 'Signup',
        path: '/signup',
      },
      {
        label: 'Pricing Table',
        path: '/pricing',
      },

      {
        label: 'Service',
        path: '/service',
      },
      {
        label: 'Terms & Conditions',
        path: '/terms-conditions',
      },
    ],
  },
];
