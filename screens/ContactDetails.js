import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

class ContactDetails extends React.Component {

    constructor() {
        super();
        this.state = {
            contact: undefined
        }
    }

    componentDidMount() {
        this.setState({ contact: this.props.navigation.state.params.contact });
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.contact != undefined ?
                    <View>
                        <View>
                            <View style={styles.skyBlue}></View>
                            <View style={styles.imageWrapper}>
                                <Image style={styles.image} source={{ uri: this.state.contact.picture.large }} />
                                <Text style={styles.name}>{this.state.contact.name.first} {this.state.contact.name.last}</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.metdataWrapper}>
                                <Text style={styles.metadata}>Cell Phone</Text>
                                <Text style={styles.detailData}>{this.state.contact.cell}</Text>
                            </View>
                            <View style={styles.metdataWrapper}>
                                <Text style={styles.metadata}>Email</Text>
                                <Text style={styles.detailData}>{this.state.contact.email}</Text>
                            </View>
                            <View style={styles.metdataWrapper}>
                                <Text style={styles.metadata}>Dob</Text>
                                <Text style={styles.detailData}>{this.state.contact.dob}</Text>
                            </View>
                            <View style={styles.metdataWrapper}>
                                <Text style={styles.metadata}>State</Text>
                                <Text style={styles.detailData}>
                                    {this.state.contact.location.city},{" "}
                                    {this.state.contact.location.state}{"  "}
                                    {this.state.contact.location.postcode}</Text>
                            </View>
                        </View>
                    </View>
                    : null}
            </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    skyBlue: {
        backgroundColor: 'skyblue',
        height: 100
    },
    imageWrapper: {
        alignItems: 'center',
        marginTop: -75,
        marginBottom: 10
    },
    image: {
        width: 150,
        height: 150,
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 100
    },
    name: {
        fontSize: 40,
        color: 'grey'
    },
    metdataWrapper: {
        flexDirection: 'row',
        marginBottom: 10
    },
    metadata: {
        fontWeight: '600',
        fontSize: 15,
        width: 120,
        textAlign: 'right',
        marginRight: 5
    },
    detailData: {
        fontSize: 15
    }
});

export default ContactDetails;