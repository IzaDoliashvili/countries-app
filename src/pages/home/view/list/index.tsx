import Article from "@/pages/home/components/article/article";
import HeroSection from "@/pages/home/components/hero-section/hero-section";
import style from "@/pages/home/components/article/article.module.css";
import { lazy } from "react";

const LazyArticleDescription = lazy(
    () => import("../../components/article-description/article-description")
  );
  
  const LazyArticleInfo = lazy(
    () => {
          return import("../../components/article-info/article-info");
      }
  );
  
  const LazyArticleList = lazy(
    () => import("../../components/article-list/article-list")
  );
  
  const LazyArticleTitle = lazy(
    () => import("../../components/article-title/article-title")
  );
  const LazyArticleCapital = lazy(
    () => import("../../components/article-capital/article-capital")
  );

const article1 = {
    imageSrc: "https://storage.georgia.travel/images/nature-of-georgia.webp",
    title: "Georgia",
    capital:" Tbilisi",
    description:
      "3713000",
  };
  const article2 = {
    imageSrc: "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg",
    title: "Japan",
    capital:" Tokyo",
    description:
      "125100000",
  };
  const article3 = {
    imageSrc: "https://media-magazine.trivago.com/wp-content/uploads/2021/11/07153335/beautiful-places-ireland-skellig-michael.jpg",
    title: "Ireland",
    capital:" Dublin",
    description:
      "5127000",
  };
  
const ArticlesListView = () =>  {
    return (
      <>
      <HeroSection />
      <LazyArticleList>
        <Article>
            <img src={article1.imageSrc} alt={article1.title} className={style.image} />
            <LazyArticleInfo>
                <LazyArticleTitle>{article1.title}</LazyArticleTitle>
                <LazyArticleCapital>{article1.capital}</LazyArticleCapital>
                <LazyArticleDescription>{article1.description}</LazyArticleDescription>
            </LazyArticleInfo>
        </Article>
        <Article>
            <img src={article2.imageSrc} alt={article2.title} className={style.image} />
            <LazyArticleInfo>
                <LazyArticleTitle>{article2.title}</LazyArticleTitle>
                <LazyArticleCapital>{article1.capital}</LazyArticleCapital>
                <LazyArticleDescription>{article2.description}</LazyArticleDescription>
            </LazyArticleInfo>
        </Article>
        <Article>
            <img src={article3.imageSrc} alt={article3.title}  className={style.image}/>
            <LazyArticleInfo>
                <LazyArticleTitle>{article3.title}</LazyArticleTitle>
                <LazyArticleCapital>{article1.capital}</LazyArticleCapital>
                <LazyArticleDescription>{article3.description}</LazyArticleDescription>
            </LazyArticleInfo>
            </Article>
        </LazyArticleList>
      
  
      </>
    );
  }
  
  export default ArticlesListView;