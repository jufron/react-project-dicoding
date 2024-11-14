import React from 'react';


const Button = ({ link }) => {
  return (
    <a href={ link }>Find Out More</a>
  );
};


const CardHeader = ({ image, category }) => {
    return (
        <header>
            <h4>{ category }</h4>
            <img src={ image } alt="poster-news" />
        </header>
    );
};

const CardBody = ({ date, title, content, link }) => {
    return (
        <div>
            <p>{ date }</p>
            <h2>{ title }</h2>
            <p>{ content }</p>
            <Button link={ link } />
        </div>
    );
}

const Card = ({ image, category, date, title, content, link }) => {
    return (
        <article>
            <CardHeader image={ image } category={ category } />
            <CardBody date={ date } title={ title } content={ content } link={ link } />
        </article>
    );
}

const Header = ({ title, subTitle }) => {
    return (
        <header>
            <h1>{ title }</h1>
            <p>{ subTitle }</p>
        </header>
    );
}

// data news
const someNews = [
    {
      title: 'CNN Acuire BEME',
      date: 'March 20 2022',
      content: "CNN purchased Casey Neistat's Beme app for $25million.",
      image: 'https://picsum.photos/600/400',
      category: 'News',
      link: '#'
    },
    {
      title: 'React and the WP-API',
      date: 'March 19 2022',
      content: 'The first ever decoupled starter theme for React & the WP-API.',
      image: 'https://picsum.photos/600/400',
      category: 'News',
      link: '#'
    },
    {
        title: 'Nomad Lifestyle',
        date: 'March 19 2022',
        content: 'Learn our tips and tricks on living a nomadic lifestyle.',
        image: 'https://picsum.photos/600/400',
        category: 'Travel',
        link: '#'
    }
];

const News = () => {
    return (
        <div>
            <Header title="News" subTitle="Latest News" />
            { someNews.map(( news, index) => {
                return (
                    <Card key={ index } {...news} />
                );
            })}
        </div>
    );
}

export default News;