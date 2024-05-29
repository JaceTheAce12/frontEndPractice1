async function getContent() {
    try {
        const response = await fetch('data/content.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

        data.sections.forEach(element => {
            console.log(element.title);
            const content = document.querySelector('.content');
            content.innerHTML += `
            <div id="contentContainer">
                <div id="imgContainer">
                    <img src="${element.imagePath}" alt="${element.altText}">
                </div>
                <div id="contentText">
                    <h1>${element.title}</h1>
                    <p>${element.description}</p>
                    <a href="#">${element.linkText}</a>
                </div>
            </div>
            `
        });

    } catch (error) {
        console.error('Error fetching the content:', error);
      }
}

getContent();
