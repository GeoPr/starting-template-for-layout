module.exports = {
  plugins: [
    require('autoprefixer')({
      grid: true,
      cascade: true,
    }),
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ],
};
