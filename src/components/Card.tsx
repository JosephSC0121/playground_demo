import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

export default function BottomActionsCard() {
  const [dataLoaded, setDataLoaded] = useState(false);

  // Simulación de carga de datos (puedes reemplazarlo con una llamada a una API real)
  useEffect(() => {
    // Simulando una carga de datos de 2 segundos
    const timeout = setTimeout(() => {
      setDataLoaded(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-primary flex justify-center items-center h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <ActionAreaCard
          title="Golang"
          image="https://www.kosli.com/images/blog/_huf34b22938de457eef0efa20f6d497dff_240160_106bf2e020c2474b8a5c90c6685ad73d.webp"
          link="/golang"
          loaded={dataLoaded}
        />
        <ActionAreaCard
          title="JavaScript"
          image="https://get.wallhere.com/photo/1920x1080-px-JavaScript-minimalism-programmers-1470493.jpg"
          link="/javascript"
          loaded={dataLoaded}
        />
        <ActionAreaCard
          title="Python"
          image="https://c4.wallpaperflare.com/wallpaper/873/975/781/python-programming-minimalism-grey-technology-hd-wallpaper-preview.jpg"
          link="/python"
          loaded={dataLoaded}
        />
        <ActionAreaCard
          title="Fundamentos y bases de programación"
          image="https://get.wallhere.com/photo/Python-programming-code-computer-minimalism-1464143.jpg"
          link="/fundamentos"
          loaded={dataLoaded}
        />
        <ActionAreaCard
          title="Programación orientada a objetos"
          image="https://get.wallhere.com/photo/1920x1080-px-angular-code-coding-color-codes-CSS-HTML-JavaScript-knowledge-logic-minified-programming-programming-language-router-syntax-highlighting-1275945.jpg"
          link="/poo"
          loaded={dataLoaded}
        />
        <ActionAreaCard
          title="Retos y ejercicios de programación"
          image="https://get.wallhere.com/photo/1920x1080-px-code-Fibonacci-sequence-programming-rust-syntax-highlighting-1336313.jpg"
          link="/retos"
          loaded={dataLoaded}
        />
      </div>
    </div>
  );
}

function ActionAreaCard({ title, content, image, link, loaded }) {
  // Define la animación de transición
  const fadeAnimation = useSpring({
    opacity: loaded ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1000 }
  });

  return (
    <Link to={link}>
      <animated.div style={fadeAnimation}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image={image} alt="languaje" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {content}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </animated.div>
    </Link>
  );
}

ActionAreaCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  loaded: PropTypes.bool,
};
