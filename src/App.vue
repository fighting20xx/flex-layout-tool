<template>
    <div id="app">
        <layout></layout>
    </div>
</template>

<script>
	import Layout from './pages/layout.vue'

	export default {
		name: 'app',
		components: {
			Layout
		}
	}
</script>

<style>
    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }

    *{
        box-sizing: border-box;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background-color: mintcream;
    }
</style>
