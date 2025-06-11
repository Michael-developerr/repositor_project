import Text from '../../shared/ui/text/Text';
import style from './loading.module.css';
const Loading = () => {
    return (
        <Text
            tag="p"
            className={style.loading}
        >
            Загрузка
        </Text>
    );
};

export default Loading;
