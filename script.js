<script>
const texts = ["Elegant Style", "Modern Fashion", "Luxury Collection"];
let i = 0;

setInterval(() => {
  document.getElementById("changing-text").innerText = texts[i];
  i = (i + 1) % texts.length;
}, 2000);
</script>