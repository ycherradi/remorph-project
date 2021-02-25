'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Campaigns', [
      { 
        title: 'TurboHub: World’s Fastest SSD & 6-in-1 USB-C Hub',
        description: '4TB SSD + Thunderbolt 3 + USB 3.1 Gen2 + USB Gen 3.1+ HDMI 2.0 + SD UHS-II + 1000Mbps Ethernet',
        media_url: 'https://www.youtube.com/89651f34-2a6e-42fe-b1ca-bcaf566f7e6d',
        goal_amount: 1000000,
        amount_generated: 450000,
        duration: 'April 2021',
        userId: 1,
        locationId: 1,
        categoryId: 1,
      },
      { 
        title: 'KNECT Wearable Charging Band Battery for iPhone',
        description: 'Affordable portable charging w/o bulky power banks or restrictive wall plugs to keep you tethered.',
        media_url: 'https://www.youtube.com/741875ff-ceea-4c07-b56d-a87a0900f65d',
        goal_amount: 200000,
        amount_generated: 41000,
        duration: 'July 2021',
        userId: 1,
        locationId: 1,
        categoryId: 5,
      },
      { 
        title: 'Mako - The Stylish 4K Touch-Screen Monitor',
        description: 'Tap into a New World of Compatibility & Creativity - Your Everyday Office Assistant & Entertainment',
        media_url: 'https://www.youtube.com/a92ccc40-c959-4cae-8d74-591033bf55bc',
        goal_amount: 1000000,
        amount_generated: 312000,
        duration: 'December 2021',
        userId: 2,
        locationId: 3,
        categoryId: 3,
      },
      { 
        title: 'Mudra Band - Touch Free Control for Apple Watch',
        description: 'Mudra Band lets you enjoy music, manage calls and notifications using effortless finger movements.',
        media_url: 'https://www.youtube.com/embed/pnY1QzwFIKE?playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fwww.indiegogo.com&widgetid=1',
        goal_amount: 500000,
        amount_generated: 214921,
        duration: 'October 2021',
        userId: 2,
        locationId: 3,
        categoryId: 5,
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Campaigns', null, {});
  }
};
