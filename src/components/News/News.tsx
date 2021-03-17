import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";

import { Instagram } from "../../api";
import { activeSectionAtom } from "../../state";
import Loader from "../Loader/Loader";

enum MediaType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  CAROUSEL_ALBUM = "CAROUSEL_ALBUM",
}

interface InstagramPost {
  id: string;
  caption: string;
  media_type: MediaType;
  media_url: string;
  permalink: string;
}

const NewsContainer = styled.div`
  min-height: 100vh;
  max-width: 956px;
  margin: 0 auto;
  padding: 72px 0;
`;

const SectionHeading = styled.h2`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 20px;
`;

const SectionContainer = styled.div`
  margin-bottom: 96px;
`;

const RecentPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 300px;
  gap: 24px;
  margin-bottom: 32px;
`;

const NewsLink = styled.a`
  text-decoration: underline;
`;

const PostContainer = styled.a``;

const Post = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const News: React.FC<{}> = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [activeSection, setActiveSection] = useRecoilState(activeSectionAtom);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const {
          data: { data },
        } = await Instagram.get<{ data: InstagramPost[] }>("");
        setPosts(
          data.filter((p) => p.media_type !== MediaType.VIDEO).slice(0, 3)
        );
      } catch (e) {
        console.log(e);
      }
    };
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection({
      name: "news",
      color: "#25436d",
      accent: "",
      time: 0,
      intersectionRatio: 1,
    });
    fetchPosts();
  }, []);

  return (
    <NewsContainer>
      <SectionContainer>
        <SectionHeading>Latest from Instagram</SectionHeading>
        <RecentPosts>
          {posts.length ? (
            posts.map((p) => (
              <PostContainer
                key={p.id}
                href={p.permalink}
                target="_blank"
                rel="noopener noreferrer"
                title={p.caption}
              >
                <Post src={p.media_url} />
              </PostContainer>
            ))
          ) : (
            <>
              <Loader />
              <Loader delay={0.1} type="ladder" />
              <Loader delay={0.2} type="curlies" />
            </>
          )}
        </RecentPosts>
        <NewsLink href="https://instagram.com/karennielsenfried">
          See more
        </NewsLink>
      </SectionContainer>
      <div style={{ display: "flex", gap: 132, marginBottom: 96 }}>
        <div style={{ flex: 1, height: 800, backgroundColor: "#FFFFFF40 " }} />
        <div style={{ flex: 1, height: 960, backgroundColor: "#FFFFFF40 " }} />
      </div>
      <div style={{ height: 1000, backgroundColor: "#FFFFFF40 " }} />
    </NewsContainer>
  );
};

export default News;
