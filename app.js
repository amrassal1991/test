const audioSelect = document.getElementById('audioSelect');
const audioPlayer = document.getElementById('audioPlayer');
const speakBtn = document.getElementById('speakBtn');
const ttsText = document.getElementById('ttsText');
const openNotebookBtn = document.getElementById('openNotebookBtn');

audioSelect.addEventListener('change', () => {
  const url = audioSelect.value;
  if (url) {
    audioPlayer.src = url;
    audioPlayer.play();
  } else {
    audioPlayer.pause();
    audioPlayer.src = '';
  }
});

speakBtn.addEventListener('click', () => {
  const text = ttsText.value.trim();
  if (!text) return alert('Please enter some text to speak.');
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  window.speechSynthesis.speak(utterance);
});

openNotebookBtn.addEventListener('click', () => {
  const colabUrl = 'https://colab.research.google.com/drive/YOUR_NOTEBOOK_ID_HERE';
  window.open(colabUrl, '_blank');
});
