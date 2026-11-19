/* Extra sales copy for index.html. Load after the page's main script. */
(function(){
var q=function(s){return document.querySelector(s)};
var pr=q('#products');if(!pr)return;
var h=pr.querySelector('h2'),s=pr.querySelector('.sub');
if(h)h.textContent='Everything your business needs';
if(s)s.textContent='Pick one product or run them together. They all work the same way, so your team learns once.';
var st=document.querySelectorAll('.strip .w > div');
if(st[3]){st[3].innerHTML='<b>Software or full install</b><span>Starter to premium</span>'}
var T=[['Step 1: Get going','Starter','Pick your product and start selling on the device you already own. The lowest cost way in, with no hardware needed.','New businesses, stalls, small shops'],
['Step 2: Look professional','Standard','Add the essentials: receipt printer, cash drawer and stand. A neater counter that serves customers faster.','Shops, takeaways, salons'],
['Step 3: Done for you','Premium','We supply, install and test everything, from scanners and card terminals to kitchen screens, and train your team.','Restaurants, bars, busy venues']];
var W=[['Serve faster','Shorter queues and quicker tables mean more sales every hour.'],['Never run out','See what is selling and what to reorder before it costs you.'],['Know your numbers','Daily takings, best sellers and staff hours without the end-of-night sums.'],['Grow at your pace','Start small, add products and hardware only when sales justify it.']];
var a=document.createElement('section');a.className='sec';a.id='setups';
a.innerHTML='<div class="w"><p class="eyebrow">Setups</p><h2>Start cheap. Grow premium.</h2><p class="sub">Three ways to set up. Begin where your budget is and step up when sales are ready.</p><div class="tiers">'+T.map(function(t,i){return'<article class="tier'+(i==2?' top':'')+'"><small>'+t[0].toUpperCase()+'</small><h3>'+t[1]+'</h3><p>'+t[2]+'</p><p><b>Best for:</b> '+t[3]+'</p><a class="btn '+(i==2?'btn-p':'btn-g')+'" href="#contact">Ask about '+t[1]+'</a></article>'}).join('')+'</div></div>';
var b=document.createElement('section');b.className='sec dk';
b.innerHTML='<div class="w"><p class="eyebrow">Why CBS</p><h2>Why businesses choose CBS</h2><div class="why">'+W.map(function(w){return'<div><h3>'+w[0]+'</h3><p>'+w[1]+'</p></div>'}).join('')+'</div></div>';
pr.after(a);a.after(b);
})();
