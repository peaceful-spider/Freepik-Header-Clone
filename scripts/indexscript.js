let vectors = document.querySelector(".images-categry-content-vector");

vectors.addEventListener('mouseover', () => {
  let vectorsContent1 = document.querySelector(".images-categry-vectors-content")
      if(vectorsContent1.style.display = "none"){
      vectorsContent1.style.display = "inline-block"
      document.querySelector(".images-categry-aiimages-content").style.display = "none"; 
      document.querySelector(".images-categry-photos-content").style.display = "none"; 
 }
})

vectors.addEventListener('mouseover', () => {
  let vectorsContent2 = document.querySelector(".images-categry-vectors-content2")
      if(vectorsContent2.style.display = "none"){
      vectorsContent2.style.display = "inline-block"
      document.querySelector(".images-categry-aiimages-content2").style.display = "none"; 
      document.querySelector(".images-categry-photos-content2").style.display = "none"; 
 }
})
// photos content

let  photos = document.querySelector(".images-categry-content-photos");

photos.addEventListener('mouseover', () => {
  let photosContent1 = document.querySelector(".images-categry-photos-content")
      if(photosContent1.style.display = "none"){
      photosContent1.style.display = "inline-block"
      document.querySelector(".images-categry-aiimages-content").style.display = "none"; 
      document.querySelector(".images-categry-vectors-content").style.display = "none"; 
 }
})

photos.addEventListener('mouseover', () => {
  let photosContent2 = document.querySelector(".images-categry-photos-content2")
      if(photosContent2.style.display = "none"){
      photosContent2.style.display = "inline-block"
      document.querySelector(".images-categry-aiimages-content2").style.display = "none"; 
      document.querySelector(".images-categry-vectors-content2").style.display = "none"; 
 }
})


// aiimages content

let aiimages = document.querySelector(".images-categry-content-aiimages");

aiimages.addEventListener('mouseover', () => {
   let aiimagesContent1 = document.querySelector(".images-categry-aiimages-content")
   if(aiimagesContent1.style.display = "none"){
   aiimagesContent1.style.display = "inline-block"
   document.querySelector(".images-categry-photos-content").style.display = "none"; 
   document.querySelector(".images-categry-vectors-content").style.display = "none"; 
 }
})

aiimages.addEventListener('mouseover', () => {
   let aiimagesContent2 = document.querySelector(".images-categry-aiimages-content2")
   if(aiimagesContent2.style.display = "none"){
   aiimagesContent2.style.display = "inline-block"
   document.querySelector(".images-categry-photos-content2").style.display = "none"; 
   document.querySelector(".images-categry-vectors-content2").style.display = "none"; 
 }
})