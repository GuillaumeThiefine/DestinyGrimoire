const vanguard = document.querySelector('.vanguard');
const crucible = document.querySelector('.crucible');
const gunsmith = document.querySelector('.gunsmith');
const monarchy = document.querySelector('.monarchy');
const orbit = document.querySelector('.orbit');
const cult = document.querySelector('.cult');

const story_van = document.querySelector('.story-van');
const story_cru = document.querySelector('.story-cru');
const story_gun = document.querySelector('.story-gun');
const story_mon = document.querySelector('.story-mon');
const story_orb = document.querySelector('.story-orb');
const story_cul = document.querySelector('.story-cul');


vanguard.onclick = function() {
    story_van.classList.toggle('active');
    vanguard.classList.toggle('active');

    crucible.classList.remove('active');
    gunsmith.classList.remove('active');
    monarchy.classList.remove('active');
    orbit.classList.remove('active');
    cult.classList.remove('active');

    story_cru.classList.remove('active');
    story_gun.classList.remove('active');
    story_mon.classList.remove('active');
    story_orb.classList.remove('active');
    story_cul.classList.remove('active');
};

crucible.onclick = function() {
    story_cru.classList.toggle('active');
    crucible.classList.toggle('active');

    vanguard.classList.remove('active');
    gunsmith.classList.remove('active');
    monarchy.classList.remove('active');
    orbit.classList.remove('active');
    cult.classList.remove('active');

    story_van.classList.remove('active');
    story_gun.classList.remove('active');
    story_mon.classList.remove('active');
    story_orb.classList.remove('active');
    story_cul.classList.remove('active');
};

gunsmith.onclick = function() {
    story_gun.classList.toggle('active');
    gunsmith.classList.toggle('active');

    vanguard.classList.remove('active');
    crucible.classList.remove('active');
    monarchy.classList.remove('active');
    orbit.classList.remove('active');
    cult.classList.remove('active');

    story_van.classList.remove('active');
    story_cru.classList.remove('active');
    story_mon.classList.remove('active');
    story_orb.classList.remove('active');
    story_cul.classList.remove('active');
};

monarchy.onclick = function() {
    story_mon.classList.toggle('active');
    monarchy.classList.toggle('active');

    vanguard.classList.remove('active');
    crucible.classList.remove('active');
    gunsmith.classList.remove('active');
    orbit.classList.remove('active');
    cult.classList.remove('active');

    story_van.classList.remove('active');
    story_cru.classList.remove('active');
    story_gun.classList.remove('active');
    story_orb.classList.remove('active');
    story_cul.classList.remove('active');
};

orbit.onclick = function() {
    story_orb.classList.toggle('active');
    orbit.classList.toggle('active');

    vanguard.classList.remove('active');
    crucible.classList.remove('active');
    gunsmith.classList.remove('active');
    monarchy.classList.remove('active');
    cult.classList.remove('active');

    story_van.classList.remove('active');
    story_cru.classList.remove('active');
    story_gun.classList.remove('active');
    story_mon.classList.remove('active');
    story_cul.classList.remove('active');
};

cult.onclick = function() {
    story_cul.classList.toggle('active');
    cult.classList.toggle('active');

    vanguard.classList.remove('active');
    crucible.classList.remove('active');
    gunsmith.classList.remove('active');
    monarchy.classList.remove('active');
    orbit.classList.remove('active');

    story_van.classList.remove('active');
    story_cru.classList.remove('active');
    story_gun.classList.remove('active');
    story_mon.classList.remove('active');
    story_orb.classList.remove('active');
};
