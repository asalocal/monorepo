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
    thumb:
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed laoreet diam, vel dictum erat. Nam iaculis elit id massa convallis, sed malesuada erat sagittis. In in egestas diam. Quisque scelerisque, dolor eget sollicitudin aliquam, velit mi malesuada orci, id bibendum turpis metus volutpat diam. Cras tempus, urna a varius venenatis, nisi nunc molestie ex, nec fermentum sapien lectus in nisl. Etiam quis ligula est. Morbi vel ipsum sapien. Fusce a dui nunc. Cras sodales velit est, vel sollicitudin risus tincidunt eget. Cras pulvinar, augue ac pharetra semper, odio erat maximus erat, feugiat eleifend arcu dui id elit.',
  },
  {
    id: crypto.createHash('md5').update('5123123123').digest('hex'),
    name: 'Orlando',
    subtitle: 'Florida, USA',
    thumb:
      'https://images.unsplash.com/photo-1575089776834-8be34696ffb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
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
    thumb:
      'https://images.unsplash.com/photo-1575089776834-8be34696ffb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
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
    thumb:
      'https://images.unsplash.com/photo-1575089776834-8be34696ffb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
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
    thumb:
      'https://images.unsplash.com/photo-1575089776834-8be34696ffb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    user: {
      name: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed laoreet diam, vel dictum erat. Nam iaculis elit id massa convallis, sed malesuada erat sagittis. In in egestas diam. Quisque scelerisque, dolor eget sollicitudin aliquam, velit mi malesuada orci, id bibendum turpis metus volutpat diam. Cras tempus, urna a varius venenatis, nisi nunc molestie ex, nec fermentum sapien lectus in nisl. Etiam quis ligula est. Morbi vel ipsum sapien. Fusce a dui nunc. Cras sodales velit est, vel sollicitudin risus tincidunt eget. Cras pulvinar, augue ac pharetra semper, odio erat maximus erat, feugiat eleifend arcu dui id elit.',
  },
];
