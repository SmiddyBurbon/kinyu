<style>
.menu ul {
  display: flex;
  width: 85.4%;
  margin: 4rem auto 0;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 4rem;
  align-items: flex-start;
}
.menu ul li {
  background: var(--white);
  -webkit-box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.08);
  -moz-box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.08);
  box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.08);
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  transition: 0.2s;
  border-radius: 16px;
  width: 25%;
  box-sizing: border-box;
  overflow: hidden;
  margin: 0 1rem;
  flex: 1;
}
.menu ul li:hover {
  -webkit-box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.08);
  -moz-box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.08);
  box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.08);
  transform: scale(1.04);
  -webkit-transform: scale(1.04);
  -moz-transform: scale(1.04);
  cursor: pointer;
}
.menu ul li:not(:last-of-type) {
  margin-bottom: 2rem;
}
.menu ul li a img {
  width: 100%;
}
.menu ul li a span {
  padding: 1.5rem 2rem;
  display: block;
}
.menu ul li a,
.menu ul li a:visited {
  text-decoration: none;
  color: var(--black);
  font-weight: 700;
}
.menu .thumb {
  height: 160px;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--turquoise);
}
.menu .thumb img {
  width: 100%;
  height: auto;
}

@media screen and (max-width: 1024px) {
  .menu ul {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (max-width: 768px) {
  .menu ul {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 480px) {
  .menu ul {
    grid-template-columns: 1fr;
  }
}
</style>
