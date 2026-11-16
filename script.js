const navToggle=document.querySelector('.nav-toggle'),siteNav=document.querySelector('.site-nav');
navToggle?.addEventListener('click',()=>{const open=siteNav.classList.toggle('open');document.body.classList.toggle('nav-open',open);navToggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.site-nav a').forEach(link=>link.addEventListener('click',()=>{siteNav.classList.remove('open');document.body.classList.remove('nav-open');navToggle?.setAttribute('aria-expanded','false');}));

const words=['I clean data','I build models','I make dashboards'];let word=0,letter=0,deleting=false;const target=document.querySelector('#type-target');
function type(){if(!target)return;const current=words[word];target.textContent=current.slice(0,letter);if(!deleting&&letter<current.length){letter++;setTimeout(type,80)}else if(!deleting){deleting=true;setTimeout(type,1350)}else if(letter>0){letter--;setTimeout(type,42)}else{deleting=false;word=(word+1)%words.length;setTimeout(type,300)}}type();

const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
const sections=[...document.querySelectorAll('main section[id]')],navLinks=[...document.querySelectorAll('.site-nav a')];
const navObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`))}}),{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(section=>navObserver.observe(section));

const countObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target,end=Number(el.dataset.count),prefix=el.dataset.prefix||'',suffix=el.dataset.suffix||'';let start=0;const tick=()=>{start=Math.min(end,start+Math.ceil(end/30));el.textContent=`${prefix}${start}${suffix}`;if(start<end)requestAnimationFrame(tick)};tick();countObserver.unobserve(el)}),{threshold:.7});
document.querySelectorAll('[data-count]').forEach(el=>countObserver.observe(el));

document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(item=>item.classList.remove('active'));
  button.classList.add('active');
  const filter=button.dataset.filter;
  document.querySelectorAll('.project-card').forEach(card=>{
    card.classList.toggle('hidden',filter!=='all'&&!card.dataset.category.split(' ').includes(filter));
  });
  document.querySelectorAll('.skill-tags span').forEach(tag=>{
    const text=tag.textContent;
    const matches=filter==='ml'&&/Regression/.test(text)||filter==='analysis'&&/Python|Pandas|NumPy|SQL|Visualisation/.test(text)||filter==='databases'&&/MongoDB|SQL/.test(text)||filter==='dashboards'&&/Excel|Visualisation/.test(text)||filter==='fullstack'&&/Java|React|JavaScript|TypeScript|Docker|CI/.test(text);
    tag.classList.toggle('lit',filter!=='all'&&matches);
  });
}));
document.querySelectorAll('.project-card').forEach(card=>card.addEventListener('click',event=>{if(event.target.closest('a'))return;card.classList.toggle('is-open');const expand=card.querySelector('.expand');if(expand)expand.querySelector('span').textContent=card.classList.contains('is-open')?'−':'+'}));

const form=document.querySelector('#contact-form'),success=document.querySelector('#success-message');form?.addEventListener('submit',event=>{event.preventDefault();form.reset();success.classList.add('show');setTimeout(()=>success.classList.remove('show'),5000)});
const backTop=document.querySelector('.back-top');window.addEventListener('scroll',()=>backTop.classList.toggle('visible',window.scrollY>600),{passive:true});backTop?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

