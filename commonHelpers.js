import{i as u,a as h,S as L}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const b=document.querySelector(".form"),p=document.querySelector(".gallery"),w=document.querySelector("input"),m=document.querySelector(".load_button"),l=document.querySelector(".loader");let s,d="",f=1;b.addEventListener("submit",S);m.addEventListener("click",v);async function S(r){if(r.preventDefault(),d=w.value.trim(),s=1,!d)return u.error({message:"Please enter a search query.",position:"topRight"});p.innerHTML="";try{await g()}catch(o){console.error(o)}finally{l.style.display="none"}r.target.reset()}async function v(){s+=1;try{await g()}catch(o){console.error(o)}finally{l.style.display="none"}const r=p.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}function $(){l.style.display="inline-block"}function q(){l.style.display="none"}function P(){m.classList.remove("hidden")}function x(){m.classList.add("hidden")}function y(){s>=f?x():P()}async function g(){$(),y();const r="42435479-889f1388d96929484f40a1796",o=15,c=`https://pixabay.com/api/?key=${r}&q=${d}&image_type=photo&orientation=horizontal&safesearch=true&page=${s}&per_page=${o}`;try{const e=(await h.get(c)).data;if(f=Math.ceil(e.totalHits/o)||1,e.hits.length===0)u.error({message:"Sorry, there are no images matching <br/>your search query. Please try again!",position:"topRight"});else{const t=e.hits.map(i=>`<li class="gallery-item" >
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
  </li>`).join("");p.insertAdjacentHTML("beforeend",t),new L(".gallery a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",fadeSpeed:150,captionSelector:"img",captionDelay:250}).on("show.simplelightbox").refresh(),q(),s>=f&&u.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}}catch(n){throw new Error(n.message)}y()}
//# sourceMappingURL=commonHelpers.js.map
