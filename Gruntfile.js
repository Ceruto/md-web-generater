module.exports = function(grunt){
    grunt.initConfig({
        md2html: {
            multiple_files: {
            options: {
                layout:"html/default-template.html",
                
            },
            files: [{
                expand: true,
                cwd: 'md/',
                src: ['**/*.md'],
                dest: 'html',
                ext: '.html'
            }]
            }
        }
    });
    grunt.registerTask('default',['md2html']);
    grunt.loadNpmTasks('grunt-md2html');
}