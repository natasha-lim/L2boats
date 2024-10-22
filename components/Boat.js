import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

const Boats = ({boat_name, icon_name, rating, description, picture}) => {
    return (
        <View>
            <Text></Text>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>
                <Icon name={icon_name} size={25} color="#B23B23" />
                {boat_name}
                <Icon name={icon_name} size={25} color="#B23B23" />
            </Text>
            <Text style={{textDecorationLine: "underline"}}>
                {description}
            </Text>
            <Text></Text>
            <Text>
                Rating: {Array.from({ length: rating }, (_, index) => (
                <Icon key={index} name="star-rate" size={15} color="#FFBF00" />
                //{Array.from({length:rating} creates a new array that has a specified length when it is called later
                // in the "AllBoats function".
                //{length:rating} is used for an object to pass to Array.from where the length is used to specify how many elements there will be
                //(_, index) is a mapping function that is usually called for every new element in a newly created array
            ))}
            </Text>
            <Image source={picture} style={{width:350, height:400}} />
        </View>
    );
};

const AllBoats = () => {
    return (
        <ScrollView>
            <Text></Text>
            <Text>
                GetABoat - For Sale
            </Text>
            <Boats boat_name="Sea Ray 500 Sundancer" icon_name="directions-boat" rating={4} description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away." picture = {require('../img/sea_ray.jpg')} />
            <Boats boat_name="Four Winns Horizon 180" icon_name="directions-boat" rating={5} description="'A sporty look and refined details truly set the Horizon 180 above all others." picture = {require('../img/four_winns.jpg')} />
            <Boats boat_name="Flipper 640 ST" icon_name="directions-boat" rating={4} description="A modern take on the classic, traditional hardtop and perfect for a family picnic." picture = {require('../img/flipper.jpg')} />
            <Boats boat_name="Princess V48" icon_name="directions-boat" rating={3} description="A modern take on the classic, traditional hardtop and perfect for a family picnic." picture = {require('../img/princess.jpg')} />
            <Boats boat_name="Bayliner 175 Bowrider" icon_name="directions-boat" rating={5} description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance." picture = {require('../img/bayliner.jpg')} />
            <Boats boat_name="Fairline Targa 47" icon_name="directions-boat" rating={4} description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit." picture = {require('../img/fairline.jpg')} />
        </ScrollView>
    );
};

export default AllBoats;
