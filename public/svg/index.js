import Vue from 'vue';

const requireTemplate = require.context( '.?vue-template', false, /\.svg$/ );
context.keys().forEach( fileName => {
    const name = 'Svg' + fileName.replace( /^\.\//, '' ).replace( /\.svg$/, '' ));
    const withRender = requireTemplate( fileName );
    const component = withRender( {} );
    Vue.component( name, component );
});