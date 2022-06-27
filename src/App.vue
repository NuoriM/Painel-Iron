<template>
  <div id="app">
    <div class="app-content-wrapper">
      <div class="app-nav">
        <div class="app-nav-header">
          <strong>Iron Hotel</strong>
        </div>
        <div class="app-nav-content-wrapper">
          <div style="gap: 8px;" class="scroller-base scroller">
            <router-link to="/">
              <div class="app-nav-item">
                  <div class="app-item-icon"><font-awesome-icon icon="fa-solid fa-house" /></div>
                  <div>Home</div>
              </div>
            </router-link>
            <router-link to="/emblemas">
              <div class="app-nav-item">
                  <div class="app-item-icon"><font-awesome-icon icon="fa-solid fa-award" /></div>
                  <div>Emblemas</div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="app-body-wrapper">
        <div class="app-body">
          <div class="app-body-header">
            <span><strong></strong></span>
          </div>
          <div class="scroller-base scroller">
            <router-view/>
          </div>
        </div>
        <div class="app-rightbar-wrapper"></div>
      </div>
    </div>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@150&display=swap');

  :root {
    --main-light-color: #E0461F;
    --main-dark-color: #E5661A;
    --nav-dark: #1e262c;
    --nav-item-color: #ffffff80;
    --nav-item-color-hover: #ffffffbf;
    --background-color: #edf1f2;
    --card-bg: #ffffff;
    --pagination-item-bg: #ffffff;
    --overlay-color: #ffffff91;
    --tooltip-color: #00000080;
    --light-color: #c3c3c3;
  }

  body {
    background-color: var(--background-color);
    font-family: 'Libre Franklin', sans-serif;
    margin: 0;
  }

  #app {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .app-content-wrapper {
    display: flex;
    flex: 1 1 auto;
    flex-direction: row;
  }

  .app-nav {
    background-color: var(--nav-dark);
    display: flex;
    flex-direction: column;
    flex: 0 1 auto;
    width: 190px;
  }

  .app-nav-header {
    color: var(--light-color);
    display: flex;
    padding: 8px;
  }

  .app-nav-content-wrapper{
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    gap: 8px;
    padding: 4px 8px;
  }

  .app-nav-content-wrapper .app-nav-item {
    
  }

  .app-nav-content-wrapper a{
    color: var(--light-color);
    text-decoration: none;
  }

  .app-nav-item {
    display: flex;
    gap: 8px;
    padding: 8px 4px 8px 8px;
  }

  .app-nav-item .app-item-icon svg {
    color: var(--light-color);
  }

  .app-body-header {
    background-color: var(--main-dark-color);
    display: flex;
    flex: 0 1 auto;
    padding: 8px;
    height: 16px;
  }

  .app-body-wrapper {
    display: flex;
    flex: 1 1 auto;
  }

  .app-body {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }

  .app-rightbar-wrapper {
    display: none;
    flex: 0 1 auto;
    width: 160px;
  }

  #badges-group {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    gap: 8px;
    justify-content: center;
    padding: 27px 0px;
  }

  .badge {
    align-items: center;
    /* background-color: var(--card-bg); */
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    min-width: 59px;
    max-height: 59px;
    padding: 8px;
    justify-content: center;
    gap: 0px;
    position: relative;
    cursor: pointer;
    user-select: none;
  }

  .badge img {
    -webkit-user-drag: none;
    image-rendering: pixelated;
  }

  .scroller.scroller-base {
    flex: 1 1 auto;
    height: 0;
    position: relative;
  }

  .scroller {
    display: flex;
    flex-direction: column;
    overflow: hidden scroll;
  }

  .home {
    padding-left: 8px;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #00000059;
    border-radius: 4px;
  }

  .d-none {
    display: none;
  }
</style>
