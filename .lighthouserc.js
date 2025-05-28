module.exports = {
    ci: {
        collect: {
            url: [
                'http://hanghae-front-4-1.s3-website-ap-southeast-2.amazonaws.com/',
                'https://d1b5m8lrjvovnk.cloudfront.net/'
            ],
            numberOfRuns: 1
        },
        upload: {
            target: 'filesystem',
            outputDir: '.lighthouseci'
        }
    }
};
