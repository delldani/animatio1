import React from 'react';



export const  App = ()=>{

  React.useEffect(()=>{
      let options = {
        root: null,
        rootMargin: '0px',
        threshold:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]
      }
      
      let observer = new IntersectionObserver((entries,observer)=>{
        entries.forEach((entrie)=>{console.log(entrie.intersectionRatio)});
      }, options);

      let target = document.querySelector('.picture');
      observer.observe(target as Element);
  },[])

  return (
    <div className="main">
       <img className='picture' src="https://images.unsplash.com/photo-1638913970961-1946e5ee65c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="kep" />
  
      <div className='text'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio sunt praesentium reprehenderit eaque alias ipsa et qui. Reiciendis harum reprehenderit nihil autem, omnis repellendus quidem eum provident odit doloribus voluptate.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit perspiciatis repellat voluptatem quasi, odio similique culpa totam incidunt quos quas porro voluptatum modi molestias repudiandae. Quasi quae asperiores veniam provident nemo architecto harum placeat ea unde? Quibusdam nulla non magnam voluptates explicabo. Illo sed dolorem in, libero ducimus quisquam. Iure doloribus soluta maiores ducimus incidunt eos mollitia recusandae dignissimos voluptatum, earum dolores nobis. Eum, quo. Numquam facere dicta ducimus voluptatibus officiis labore laudantium modi! Natus necessitatibus magni iure est molestias nostrum libero numquam debitis nisi voluptas nemo amet quam at deleniti aut, repudiandae rerum corporis fugit. Praesentium, accusantium. Cumque!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis nesciunt libero, suscipit repellendus officiis rerum nobis similique, quasi eum iusto molestias? Iure quisquam consequuntur molestias quaerat dignissimos ipsa necessitatibus dolores ab quae dolore expedita, eveniet maiores blanditiis esse, illum nesciunt. Maiores soluta dolorem architecto explicabo obcaecati. Ut cum, eius atque sint molestiae facilis ipsa voluptatum impedit eaque, sunt suscipit, ratione enim. Nostrum unde, voluptas, iure cupiditate ab dolores eligendi corporis architecto reprehenderit adipisci culpa ad, recusandae nam voluptatum est officia quo distinctio ipsum? Earum enim, optio amet, a eum, nostrum ratione reiciendis quia eius sed nulla. Repellendus ipsa repellat nesciunt nobis doloremque voluptatibus. Cumque dolores perferendis, minima animi fugiat sed praesentium ducimus sunt, laboriosam porro saepe. Sed a temporibus ullam magnam, eum facere ex laudantium recusandae culpa nesciunt impedit voluptas excepturi corrupti aspernatur dignissimos. Culpa nobis enim voluptatem fugit aut distinctio maiores veritatis! Ab voluptatibus adipisci quaerat beatae rerum facere ratione eligendi deserunt placeat! Ex sint consequuntur doloribus, expedita incidunt itaque, accusantium suscipit vero voluptas impedit quisquam. Dolore ea hic inventore consectetur tempore provident animi ipsa! Repellendus provident quo consectetur tempore? Recusandae et similique accusamus soluta saepe excepturi voluptate voluptates expedita, libero vero quod quidem dolorem fugiat sunt id aperiam?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias maiores excepturi expedita deleniti ullam quae odio dolore, assumenda sed molestiae fuga eveniet possimus nobis explicabo eligendi iste incidunt. Vel, eius.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque laborum odio, quo porro ut perferendis ad sit labore, at numquam vero vitae eligendi! Fugiat voluptates beatae labore voluptatum accusamus laudantium.</p>
      </div>
    </div>
  );
}

