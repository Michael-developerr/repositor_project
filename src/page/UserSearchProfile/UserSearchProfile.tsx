// import { Link } from 'react-router-dom';

// import Text from '../../shared/ui/text/Text';
// import { useSelector } from 'react-redux';
// import { getValue } from '../../features/searchOnInput/model/searchSelector';
// import style from './UserProfile.module.css';
// import { GitHubUser } from '../../shared/api/repositories/typeApi';
// import Loading from '../Loading';
// import Error404 from '../Error404';

// interface UserSearchProfileProps {
//     data?: GitHubUser;
//     loading: boolean;
//     error: unknown;
// }

// const UserSearchProfile = ({
//     data,
//     loading,
//     error,
// }: UserSearchProfileProps) => {
//     if (loading) return <Loading />;
//     if (error) return <Error404 />;
//     const value = useSelector(getValue);

//     return (
//         <div className={style.userBlock}>
//             {data && (
//                 <>
//                     <img
//                         src={data.avatar_url}
//                         alt="фото user"
//                         className={style.img}
//                     />
//                     <Text
//                         tag="h3"
//                         weight="semiBold"
//                         size="l"
//                     >
//                         {data.login}
//                     </Text>

//                     <Link
//                         to={data.html_url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         {value}
//                     </Link>
//                     <div className={style.block__follow}>
//                         <Text
//                             tag="p"
//                             className={
//                                 style.block__follow__followers
//                             }
//                         >
//                             {data.followers} followers
//                         </Text>
//                         <Text
//                             tag="p"
//                             className={
//                                 style.block__follow__following
//                             }
//                         >
//                             {data.following} following
//                         </Text>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default UserSearchProfile;
