const iconSets = [
  {
    id: 'beige-background-check-1',
    label: 'Beige Background Check 1',
    file: 'favicons/Beige achtergrond - vink 1.png',
    themeColor: '#8a6f4d',
  },
  {
    id: 'beige-background-1',
    label: 'Beige Background 1',
    file: 'favicons/Beige achtergrond 1.png',
    themeColor: '#9d7e57',
  },
  {
    id: 'dark-blue-background-check-1',
    label: 'Dark Blue Background Check 1',
    file: 'favicons/Donkerblauwe achtergrond - vink 1.png',
    themeColor: '#19395a',
  },
  {
    id: 'light-blue-background-check-1',
    label: 'Light Blue Background Check 1',
    file: 'favicons/Lichtblauwe achtergrond - vink 1.png',
    themeColor: '#3e7da8',
  },
  {
    id: 'light-blue-background-1',
    label: 'Light Blue Background 1',
    file: 'favicons/Lichtblauwe achtergrond 1.png',
    themeColor: '#5a9ecb',
  },
  {
    id: 'middle-blue-background-check-1',
    label: 'Middle Blue Background Check 1',
    file: 'favicons/Middenblauwe achtergrond - vink 1.png',
    themeColor: '#275f8a',
  },
  {
    id: 'middle-blue-background-1',
    label: 'Middle Blue Background 1',
    file: 'favicons/Middenblauwe achtergrond 1.png',
    themeColor: '#2f6f9f',
  },
];

const linkIds = ['favicon-32', 'favicon-16', 'favicon-any', 'apple-touch-icon'];

const iconGrid = document.getElementById('icon-grid');
const headPreview = document.getElementById('head-preview');

function cacheBust(path) {
  return `${path}?v=${Date.now()}`;
}

function updatePreview() {
  const tags = [
    ...linkIds.map((id) => {
      const element = document.getElementById(id);
      return element ? element.outerHTML : '';
    }),
    document.getElementById('site-manifest')?.outerHTML || '',
  ].filter(Boolean);

  headPreview.textContent = tags.join('\n');
}

function applyIconSet(setId) {
  const iconSet = iconSets.find((item) => item.id === setId);
  if (!iconSet) {
    return;
  }

  for (const linkId of linkIds) {
    const element = document.getElementById(linkId);
    if (element) {
      element.href = cacheBust(iconSet.file);
    }
  }

  const manifestTag = document.getElementById('site-manifest');
  if (manifestTag) {
    manifestTag.href = `favicons/site.webmanifest?icon=${iconSet.id}&v=${Date.now()}`;
  }

  document.documentElement.style.setProperty('--accent-2', iconSet.themeColor);

  for (const button of iconGrid.querySelectorAll('button')) {
    button.setAttribute('aria-pressed', String(button.dataset.id === setId));
  }

  updatePreview();
}

function createButtons() {
  for (const [index, iconSet] of iconSets.entries()) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'icon-btn';
    button.dataset.id = iconSet.id;
    button.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');

    const image = document.createElement('img');
    image.src = iconSet.file;
    image.alt = `${iconSet.label} preview`;

    const label = document.createElement('strong');
    label.textContent = iconSet.label;

    const path = document.createElement('span');
    path.textContent = iconSet.file;

    button.append(image, label, path);
    button.addEventListener('click', () => applyIconSet(iconSet.id));
    iconGrid.appendChild(button);
  }
}

createButtons();
applyIconSet(iconSets[0].id);
