import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import PageHeader from '../../componentes/PageHeader';

function TeacherList() {
    return (
    <View style={styles.container} > 
        <PageHeader title="Proffys disponíveis" />
    </View>
    );
}

export default TeacherList;