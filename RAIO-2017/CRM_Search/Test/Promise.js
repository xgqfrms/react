/**
 * xgqfrms
 * 2017.08.22
 * 
 * @param {promise} opts 
 */

// const ChromeSamples = (ChromeSamples === undefined ? console : ChromeSamples) || console;
const ChromeSamples = console;

const createGist = (opts) => {
    ChromeSamples.log('Posting request to GitHub API...');
    fetch(
        'https://api.github.com/gists', 
        {
            method: 'post',
            body: JSON.stringify(opts)
        }
    ).then(
        (response) => response.json()
    ).then(
        (data) => {
            ChromeSamples.log('Created Gist:', data.html_url);
        }
    );
}

const submitGist = () => {
    let content = document.querySelector('textarea').value;
    if (content) {
        createGist(
            {
                description: 'Fetch API Post example',
                public: true,
                files: {
                    'test.js': {
                        content: content
                    }
                }
            }
        );
    } else {
        ChromeSamples.log('Please enter in content to POST to a new Gist.');
    }
}

const submitBtn = document.querySelector('button');
submitBtn.addEventListener('click', submitGist);
