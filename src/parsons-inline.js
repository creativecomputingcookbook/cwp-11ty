// Helper for displaying errors from the Parsons widget
function displayErrors(fb, uid) {
  const copyButton = document.querySelector(`#${uid} #copyCodeLink`);

  // If there are errors, show error message and disable copy button.
  if (fb.errors && fb.errors.length > 0) {
    // Disable copy button if there are errors
    copyButton.classList.add('opacity-50', 'pointer-events-none');

    // Create a nicer error message element instead of an alert
    const errorContainer = document.createElement('div');
    errorContainer.className =
      'bg-red-50 border-l-4 border-red-400 p-4 mt-4 text-red-700 rounded';
    errorContainer.innerHTML = `<p>${fb.errors[0]}</p>`;

    // Find the widget container and append the error
    const widgetContainer = document.querySelector(`#${uid} .parsons-widget`);

    // Remove any existing error messages
    const existingErrors = widgetContainer.querySelectorAll(
      `#${uid} .bg-red-50`,
    );
    existingErrors.forEach((el) => el.remove());

    widgetContainer.appendChild(errorContainer);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      errorContainer.remove();
    }, 5000);
  } else {
    // No errors: enable the copy button.
    copyButton.classList.remove('opacity-50', 'pointer-events-none');
  }
}

function decodeHtmlEntities(str) {
  var txt = document.createElement('textarea');
  txt.innerHTML = str;
  return txt.value;
}

// function processBlock(startRaw, i, lines) {
//   const linesAcc = [startRaw];
//   let depth = 1;
//   i++;

//   while (i < lines.length && depth > 0) {
//     const raw = lines[i];
//     const trimmed = raw.trim();
//     i++;
//     if (!trimmed) continue;

//     if (trimmed.includes('{')) depth++;
//     if (trimmed.includes('}')) depth--;

//     if (
//       /^(for\s*\([^)]*\)\s*{|if\s*\([^)]*\)\s*{|else\s*{)/.test(trimmed) &&
//       depth >= 1
//     ) {
//       linesAcc.push(processBlock(raw));
//       continue;
//     }
//     linesAcc.push(trimmed);
//   }

//   return linesAcc.join('\n');
// }

// function preprocess(code) {
//   code = code
//     .replace(/\/\/.*$/gm, '')
//     .replace(/\/\*[\s\S]*?\*\//g, '')
//     .replace(/</g, '&lt')
//     .replace(/>/g, '&gt')
//     .trim();
//   const lines = code.split('\n');
//   const blocks = [];
//   let i = 0;

//   while (i < lines.length) {
//     let line = lines[i].trim();
//     if (!line) {
//       i++;
//       continue;
//     }

//     const fnMatch = line.match(/^[\w\*\s]+\s+\w+\s*\([^)]*\)\s*{$/);
//     if (fnMatch) {
//       blocks.push(line);
//       i++;

//       let fnDepth = 1;
//       while (i < lines.length && fnDepth > 0) {
//         const txt = lines[i].trim();

//         const blockMatch = txt.match(
//           /^(for\s*\([^)]*\)\s*{|if\s*\([^)]*\)\s*{|else\s*{)$/,
//         );
//         if (blockMatch && fnDepth === 1) {
//           const block = processBlock(txt, i, lines);
//           blocks.push(block);
//         } else if (txt.endsWith(';') && fnDepth === 1) {
//           blocks.push(txt);
//           i++;
//         } else {
//           if (txt.includes('{')) fnDepth++;
//           if (txt.includes('}')) fnDepth--;

//           if (fnDepth === 0) {
//             blocks.push('}');
//           }
//           i++;
//         }
//       }
//       continue;
//     }

//     if (line.startsWith('#')) {
//       blocks.push(line);
//       i++;
//       continue;
//     }
//
//     if (line.endsWith(';')) {
//       blocks.push(line);
//       i++;
//       continue;
//     }
//     i++;
//   }
//   return blocks;
// }

function setup_parsons(uid, initial) {
  // Wait for the document to be ready before initializing the widget
  window.addEventListener('DOMContentLoaded', function () {
    // Disable the copy button by default.
    const copyButton = document.querySelector(`#${uid} #copyCodeLink`);
    copyButton.classList.add('opacity-50', 'pointer-events-none');

    let sortableId = uid + '-sortable';
    var parson = new ParsonsWidget({
      sortableId,
      trashId: uid + '-sortableTrash',
      max_wrong_lines: 1,
      lang: 'en',
      feedback_cb: (fb) => displayErrors(fb, uid),
      can_indent: true,
    });

    // const blocks = preprocess(initial);
    //
    // const initStruct = parson.parseCode(blocks, parson.options.max_wrong_lines);
    // parson.model_solution = initStruct.solution;
    // parson.extra_lines = initStruct.distractors;
    // parson.modified_lines = initStruct.widgetInitial;
    //
    // parson.modified_lines.forEach((lineObj, idx) => {
    //   lineObj.id = parson.id_prefix + idx;
    //   lineObj.indent = 0;
    // });
    initial = initial
      .replace(/\s*\/\/.*$/gm, '')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/</g, '&lt')
      .replace(/>/g, '&gt')
      .replace(/^\s*[\t\n\r]/, '') // no empty first line
      .replace(/#continue\n/g, '\\n')
      .trimEnd();
    // get first line
    let firstIndent = initial.split('\n')[0].match(/^\s+/);
    console.log(initial.split('\n')[0], firstIndent);
    if (firstIndent) {
      initial = initial.replace(new RegExp(`^${firstIndent[0]}`, 'gm'), '');
    }
    console.log(initial);
    parson.init(initial);
    parson.shuffleLines();

    // Button event handlers
    $(`#${uid} #newInstanceLink`).click(function (event) {
      event.preventDefault();
      parson.shuffleLines();

      // Remove any error messages when shuffling
      const widgetContainer = document.querySelector(`#${uid} .parsons-widget`);
      const existingErrors = widgetContainer.querySelectorAll(
        `#${uid} .bg-red-50`,
      );
      existingErrors.forEach((el) => el.remove());

      // Also disable the copy button when shuffling for a fresh attempt.
      copyButton.classList.add('opacity-50', 'pointer-events-none');
    });

    $(`#${uid} #feedbackLink`).click(function (event) {
      event.preventDefault();
      parson.getFeedback();
    });

    $(`#${uid} #copyCodeLink`).click(function (event) {
      event.preventDefault();
      let studentCode = parson
        .normalizeIndents(parson.getModifiedCode('#ul-' + sortableId))
        .map((c) => {
          let decoded = decodeHtmlEntities(c.code);
          return `${'    '.repeat(c.indent < 0 ? 0 : c.indent)}${decoded}`;
        });

      navigator.clipboard.writeText(studentCode.join('\n')).then(() => {
        // Create a success message element instead of an alert
        const successContainer = document.createElement('div');
        successContainer.className =
          'bg-green-50 border-l-4 border-green-400 p-4 mt-4 text-green-700 rounded';
        successContainer.innerHTML = `<p>Code copied to clipboard!</p>`;

        // Find the widget container and append the success message
        const widgetContainer = document.querySelector('.parsons-widget');

        // Remove any existing success messages
        const existingMessages =
          widgetContainer.querySelectorAll('.bg-green-50');
        existingMessages.forEach((el) => el.remove());

        widgetContainer.appendChild(successContainer);

        // Auto-remove after 3 seconds
        setTimeout(() => {
          successContainer.remove();
        }, 3000);
      });
    });
  });
}
