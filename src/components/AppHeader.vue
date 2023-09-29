<template>
  <div>
    <nav>
      <div class="container mx-auto flex items-center justify-center">
        <div class="flex items-center mr-20">
          <img src="@/assets/logo.png" alt="websitelogo" class="w-32 h-16" />
        </div>
        <div class="flex justify-between items-center ">
          <ul class="flex space-x-5 text-black text-extrabold text-lg">
            <li>Home</li>
            <li>All Courses</li>
            <li>Pages</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
        </div>
        <div class="ml-16">
          <button
            class="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4"
          >
            Sign In
          </button>
          <button
            class="bg-blue-500 text-white px-4 py-2 rounded-lg "
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped></style>
