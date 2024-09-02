import { allSets } from "./prompts.mjs";

const generateBtn = document.getElementById('generateBtn');
const result = document.getElementById('result');

generateBtn.addEventListener('click', generatePrompts);

function generatePrompts() {
  const selectedSets = new Set();
  const prompts = [];

  while (prompts.length < 3) {
    const randomSetIndex = Math.floor(Math.random() * allSets.length);
    const randomSet = allSets[randomSetIndex];

    if (selectedSets.size < allSets.length && selectedSets.has(randomSetIndex)) {
      continue;
    }

    const randomEntryIndex = Math.floor(Math.random() * randomSet.entries.length);
    const randomEntry = randomSet.entries[randomEntryIndex];

    prompts.push({
      type: randomSet.type,
      entry: randomEntry,
    });

    selectedSets.add(randomSetIndex);

    if (selectedSets.size === allSets.length) {
      selectedSets.clear();
    }
  }

  displayPrompts(prompts);
}

function displayPrompts(prompts) {
  const promptList = prompts
    .map(prompt => `<li style="display:flex;justify-content:space-between;"><strong>${prompt.type}:</strong> <span>${prompt.entry}</span></li>`)
    .join('');

  result.innerHTML = `<ul>${promptList}</ul>`;
}
