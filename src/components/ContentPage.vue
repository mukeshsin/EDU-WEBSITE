<template>
  <div class="flex mt-16 space-x-16 justify-center">
    <div class="flex items-center justify-center">
      <div>
        <div>
          <h1 class="text-4xl font-bold text-black">
            Welcome To <span class="text-red-600">EduHub</span>
          </h1>
        </div>
        <div>
          <p class="mt-4 text-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa minus
            consequuntur <br />
            eaque corporis maiores perferendis alias nihil? Debitis molestias ea<br>
            ipsum aspernatur obcaecati hic velit voluptas deleniti nobis
          </p>
        </div>
      </div>
    </div>
    <div class="video-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/vww8-z6xMxY?si=sps96rfXuee0MAOA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContentPage",
};
</script>
<style scoped></style>
