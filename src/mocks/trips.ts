import crypto from 'crypto';

export const trips = [
  {
    id: crypto.createHash('md5').update('1').digest('hex'),
    name: 'New York',
    subtitle: 'New York, USA',
    user: {
      name: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    thumbs: [
      'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5ldyUyMHlvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed laoreet diam, vel dictum erat. Nam iaculis elit id massa convallis, sed malesuada erat sagittis. In in egestas diam. Quisque scelerisque, dolor eget sollicitudin aliquam, velit mi malesuada orci, id bibendum turpis metus volutpat diam. Cras tempus, urna a varius venenatis, nisi nunc molestie ex, nec fermentum sapien lectus in nisl. Etiam quis ligula est. Morbi vel ipsum sapien. Fusce a dui nunc. Cras sodales velit est, vel sollicitudin risus tincidunt eget. Cras pulvinar, augue ac pharetra semper, odio erat maximus erat, feugiat eleifend arcu dui id elit.',
  },
  {
    id: crypto.createHash('md5').update('5123123123').digest('hex'),
    name: 'Orlando',
    subtitle: 'Florida, USA',
    thumbs: [
      'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5ldyUyMHlvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    ],

    user: {
      name: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed laoreet diam, vel dictum erat. Nam iaculis elit id massa convallis, sed malesuada erat sagittis. In in egestas diam. Quisque scelerisque, dolor eget sollicitudin aliquam, velit mi malesuada orci, id bibendum turpis metus volutpat diam. Cras tempus, urna a varius venenatis, nisi nunc molestie ex, nec fermentum sapien lectus in nisl. Etiam quis ligula est. Morbi vel ipsum sapien. Fusce a dui nunc. Cras sodales velit est, vel sollicitudin risus tincidunt eget. Cras pulvinar, augue ac pharetra semper, odio erat maximus erat, feugiat eleifend arcu dui id elit.',
  },
  {
    id: crypto.createHash('md5').update('5134123123').digest('hex'),
    name: 'Orlando',
    subtitle: 'Florida, USA',
    thumbs: [
      'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5ldyUyMHlvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    ],
    user: {
      name: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed laoreet diam, vel dictum erat. Nam iaculis elit id massa convallis, sed malesuada erat sagittis. In in egestas diam. Quisque scelerisque, dolor eget sollicitudin aliquam, velit mi malesuada orci, id bibendum turpis metus volutpat diam. Cras tempus, urna a varius venenatis, nisi nunc molestie ex, nec fermentum sapien lectus in nisl. Etiam quis ligula est. Morbi vel ipsum sapien. Fusce a dui nunc. Cras sodales velit est, vel sollicitudin risus tincidunt eget. Cras pulvinar, augue ac pharetra semper, odio erat maximus erat, feugiat eleifend arcu dui id elit.',
  },
  {
    id: crypto.createHash('md5').update('1432341312').digest('hex'),
    name: 'Orlando',
    subtitle: 'Florida, USA',
    thumbs: [
      'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5ldyUyMHlvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    ],
    user: {
      name: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed laoreet diam, vel dictum erat. Nam iaculis elit id massa convallis, sed malesuada erat sagittis. In in egestas diam. Quisque scelerisque, dolor eget sollicitudin aliquam, velit mi malesuada orci, id bibendum turpis metus volutpat diam. Cras tempus, urna a varius venenatis, nisi nunc molestie ex, nec fermentum sapien lectus in nisl. Etiam quis ligula est. Morbi vel ipsum sapien. Fusce a dui nunc. Cras sodales velit est, vel sollicitudin risus tincidunt eget. Cras pulvinar, augue ac pharetra semper, odio erat maximus erat, feugiat eleifend arcu dui id elit.',
  },
  {
    id: crypto.createHash('md5').update('1231231313').digest('hex'),
    name: 'Orlando',
    subtitle: 'Florida, USA',
    thumbs: [
      'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5ldyUyMHlvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    ],
    user: {
      name: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed laoreet diam, vel dictum erat. Nam iaculis elit id massa convallis, sed malesuada erat sagittis. In in egestas diam. Quisque scelerisque, dolor eget sollicitudin aliquam, velit mi malesuada orci, id bibendum turpis metus volutpat diam. Cras tempus, urna a varius venenatis, nisi nunc molestie ex, nec fermentum sapien lectus in nisl. Etiam quis ligula est. Morbi vel ipsum sapien. Fusce a dui nunc. Cras sodales velit est, vel sollicitudin risus tincidunt eget. Cras pulvinar, augue ac pharetra semper, odio erat maximus erat, feugiat eleifend arcu dui id elit.',
  },
];
