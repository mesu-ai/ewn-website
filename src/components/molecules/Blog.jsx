/* eslint-disable react/require-default-props */
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import blog1 from '../../assets/images/blog1.png';
import blog2 from '../../assets/images/blog2.png';
import blog3 from '../../assets/images/blog3.png';
import blog4 from '../../assets/images/blog4.png';
import blog5 from '../../assets/images/blog5.png';
import blog6 from '../../assets/images/blog6.png';
import blog7 from '../../assets/images/blog7.png';
import blog8 from '../../assets/images/blog8.png';
import blog9 from '../../assets/images/blog9.png';

import ArrowRightIcon from '../../assets/svgs/ArrowRightIcon';
import Heading from '../atoms/Heading';
import NavLink from '../atoms/NavLink';
import Overlay from '../atoms/Overlay';

export const blogs = [
  { id: 1, banner: blog1, path: '#' },
  { id: 2, banner: blog2, path: '#' },
  { id: 3, banner: blog3, path: '#' },
  { id: 4, banner: blog4, path: '#' },
  { id: 5, banner: blog5, path: '#' },
  { id: 6, banner: blog6, path: '#' },
  { id: 7, banner: blog7, path: '#' },
  { id: 8, banner: blog8, path: '#' },
  { id: 9, banner: blog9, path: '#' },
  { id: 10, banner: blog5, path: '#' },
  { id: 11, banner: blog6, path: '#' },
  { id: 12, banner: blog7, path: '#' },
  { id: 13, banner: blog8, path: '#' },
  { id: 14, banner: blog9, path: '#' },
  { id: 15, banner: blog3, path: '#' },
];

const Blog = ({ title = 'Blog', start = 0, end = 6 }) => {
  const router = useRouter();

  return (
    <section className="container mx-auto px-4 sm:px-0 flex flex-col justify-center items-center space-y-5 py-28">
      <Heading
        title={title}
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-20 gap-6 ">
        {blogs &&
          blogs.slice(start, end).map((blog) => (
            <Overlay key={blog.id} img={blog.banner} className="rounded list-none">
              <div className="list-none absolute bottom-5 lg:bottom-10 left-5 right-5">
                <p className="font-semibold text-xl text-white">Team discussion</p>
                <p className="font-medium text-sm text-lightwhite">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                </p>
                <li className="mt-4">
                  <NavLink
                    path={blog?.path}
                    className="text-lightgreen flex items-center text-sm hover:bg-none pl-0  w-fit"
                  >
                    More <ArrowRightIcon className="ml-1 w-3 h-2.5 text-lightgreen" />
                  </NavLink>
                </li>
              </div>
            </Overlay>
          ))}
      </div>

      {router.pathname === '/' || router.pathname === '/home' ? (
        <li className="pt-8 list-none">
          <NavLink path="/blog" className="flex items-center float-right ring-2 ring-black rounded-sm">
            See more
            <ArrowRightIcon className="ml-2 " />
          </NavLink>
        </li>
      ) : (
        <div />
      )}
    </section>
  );
};

Blog.propTypes = {
  title: PropTypes.string,
  start: PropTypes.number,
  end: PropTypes.number,
};

export default Blog;
