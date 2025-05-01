const synth = new Tone.Synth().toDestination();

document.querySelectorAll('.white-key, .black-key').forEach(key => {
  key.addEventListener('click', () => {
    const note = key.getAttribute('data-note');
    synth.triggerAttackRelease(note, "8n");
  });
});