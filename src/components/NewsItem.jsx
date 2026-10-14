import common from '../assets/common.jpg'
const NewsItem = ({ title, description, src, url }) => {
  return (
    <section className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: '320px' }}>
      <img
        src={src || common} style={{height:"200px", width:"300px"}}
        className="card-img-top"
        alt={title || 'News image'}
      />
      <div className="card-body">
        <h4 className="card-title">{title.slice(0,50)}</h4>
        <p className="card-text">{description ? description.slice(0,90):"News Creating a custom news description involves transforming ordinary details into engaging narratives. Tools like the News Description Translator can elevate plain language into dynamic and informative news descriptions, ensuring content captures audience attention. This tool is particularly useful for journalists and content creators looking to enhance their storytelling and engage readers effectively."}</p>
        <a
          href={url}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >Read More</a>
      </div>
    </section>
  );
};

export default NewsItem;
