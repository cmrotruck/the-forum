async function newFormHandler(event) {
    event.preventDefault();
  
    const post_title = document.querySelector('input[name="post-title"]').value;
    const post_text = document.querySelector('textarea[name="post-text"]').value;
    const post_image = document.querySelector('input[name="post-image"]').value;
    const group_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        group_id,
        post_title,
        post_text,
        post_image
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#post-button').addEventListener('click', newFormHandler);