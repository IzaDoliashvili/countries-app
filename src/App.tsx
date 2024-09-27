import { ArticleDescription } from "./components/article-info/article-description/article-description";
import { ArticleCapital } from "./components/article-info/article-capital/article-capital";
import { ArticleInfo } from "./components/article-info/article-info";
import { ArticleList } from "./components/article-list/article-list";
import { ArticleTitle } from "./components/article-info/article-title/article-title";
import { Article } from "./components/article-list/article/article";
import DashboardLayout from "../layout/dashboard/index";
import { HeroSection } from "./components/hero-section/hero-section";
import { PageContainer } from "./components/page-container/page-container";
import style from "./components/article-list/article/article.module.css";

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

function App() {
  return (
    <>
    <DashboardLayout>

      <PageContainer>
        <HeroSection />

        <ArticleList>
          <Article>
            <img src={article1.imageSrc} alt={article1.title} className={style.image} />
            <ArticleInfo>
              <ArticleTitle>{article1.title}</ArticleTitle>
              <ArticleCapital>{article1.capital}</ArticleCapital>
              <ArticleDescription>{article1.description}</ArticleDescription>
              
            </ArticleInfo>
          </Article>
          <Article>
            <img src={article2.imageSrc} alt={article2.title} className={style.image} />
            <ArticleInfo>
              <ArticleTitle>{article2.title}</ArticleTitle>
              <ArticleCapital>{article1.capital}</ArticleCapital>
              <ArticleDescription>{article2.description}</ArticleDescription>
            </ArticleInfo>
          </Article>
          <Article>
            <img src={article3.imageSrc} alt={article3.title}  className={style.image}/>
            <ArticleInfo>
              <ArticleTitle>{article3.title}</ArticleTitle>
              <ArticleCapital>{article1.capital}</ArticleCapital>
              <ArticleDescription>{article3.description}</ArticleDescription>
            </ArticleInfo>
          </Article>
        </ArticleList>
      </PageContainer>
    </DashboardLayout>

    </>
  );
}

export default App;
