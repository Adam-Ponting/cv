<template>
  <div id="nav-bar">
    <ul>
      <a :href="links[0].href">
        <img :src="links[0].image" />
      </a>
      <li v-for="(link, index) in links.slice(1)" :key="index">
        <a :href="link.href">{{ link.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "",
          href: "#",
          image:
            "https://firebasestorage.googleapis.com/v0/b/adp-cv.appspot.com/o/base%2Fadam-logo.jpg?alt=media&token=2aa71b01-e382-4c1e-b29f-184a44b73e3a"
        },
        { name: "MyStory", href: "#story" },
        { name: "MySkills", href: "#skills" },
        { name: "MyWorks", href: "#works" }
      ]
    };
  }
};
</script>
