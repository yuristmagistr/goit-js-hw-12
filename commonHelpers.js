import{i as a,a as y,S as L}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const b=document.querySelector(".form"),m=document.querySelector(".gallery"),w=document.querySelector("input"),g=document.querySelector(".load_button"),f=document.querySelector(".loader");let n,u="",d=1;b.addEventListener("submit",S);g.addEventListener("click",v);async function S(o){if(o.preventDefault(),u=w.value.trim(),n=1,!u)return a.error({message:"Please enter a search query.",position:"topRight"});m.innerHTML="";try{await h()}catch(r){console.error(r),a.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}o.target.reset()}async function v(){n+=1;try{await h()}catch(r){console.error(r),a.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}const o=m.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}async function h(){P(),p();const o="42435479-889f1388d96929484f40a1796",r=15,c=`https://pixabay.com/api/?key=${o}&q=${u}&image_type=photo&orientation=horizontal&safesearch=true&page=${n}&per_page=${r}`;try{const e=(await y.get(c)).data;if(d=Math.ceil(e.totalHits/r)||1,e.hits.length===0)a.error({message:"Sorry, there are no images matching <br/>your search query. Please try again!",position:"topRight"});else{const t=e.hits.map(i=>`<li class="gallery-item" >
    <a class="gallery-link" href="${i.largeImageURL}">
      <img
        class="gallery-image"
        src="${i.webformatURL}"
        alt="${i.tags}"
      />
    </a>
    <div class="item-text">
      <ul>Likes<li>${i.likes}</li></ul>
      <ul>Views<li>${i.views}</li></ul>
      <ul>Comments<li>${i.comments}</li></ul>
      <ul>Downloads<li>${i.downloads}</li></ul>
    </div>
  </li>`).join("");m.insertAdjacentHTML("beforeend",t),new L(".gallery a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",fadeSpeed:150,captionSelector:"img",captionDelay:250}).on("show.simplelightbox").refresh(),$(),n>=d&&a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}}catch(s){throw new Error(s.message)}p()}function P(){f.style.display="inline-block"}function $(){f.style.display="none"}function q(){g.classList.remove("hidden")}function x(){g.classList.add("hidden")}function p(){n>=d?x():q()}
//# sourceMappingURL=commonHelpers.js.map
