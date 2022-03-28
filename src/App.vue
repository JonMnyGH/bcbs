<template>
  <header>
    <router-link to="/">
      <h1>Brew<span>Haus</span></h1>
    </router-link>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Fira Sans", sans-serif;
  color: #374c8d;
  background-color: #fff5ee;

  &::selection {
    background: transparentize(#43b883, 0.5);
  }
}

h1 {
  color: white;
  font-size: 28px;

  span {
    color: #374c8d;
  }
}

a {
  text-decoration: none;
}

header {
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8d7837;
}
</style>
