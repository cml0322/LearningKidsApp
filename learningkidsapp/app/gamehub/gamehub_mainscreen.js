import React from 'react';
import { Pressable, Text, View, StyleSheet, Image} from 'react-native';
import {  useFonts, EBGaramond_600SemiBold,EBGaramond_800ExtraBold} from '@expo-google-fonts/eb-garamond';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';

export default function Button(clickButton) {

    {/*loading fonts here */}
    let [fontsLoaded] = useFonts({
        EBGaramond_600SemiBold,EBGaramond_800ExtraBold
    });
    if (!fontsLoaded) {
        return null;
      }

    {/*Buttons for screens*/}
    const { onPressCorgiEscapeTutorial, corgiEscapeTutorialBtn = 'Tutorial' } = clickButton;
    const { onPressCorgiEscapeStart, corgiEscapeStartBtn = 'Start' } = clickButton;
    const { onPressTreatFallsTutorial, treatFallsTutorialBtn = 'Tutorial' } = clickButton;
    const { onPressTreatFallsStart, treatFallsStartBtn = 'Start' } = clickButton;
    const { onPresstest, testStartBtn = 'TEST' } = clickButton;

    //button to go back to index.js aka the first landing screen
    const navigation = useNavigation();
    const backButton = () => {
        navigation.navigate('home/home');
    };

    

  return (
    <View style={styles.container}>
        <LinearGradient colors={['#6495ED', '#B0C4DE','#E0FFFF','#6495ED']} style={styles.background}/>

        {/*back button*/}
        <Pressable style={styles.back_arrow_img} onPress={backButton}>
          <Image source={require('../../assets/back_arrow.png')} style={styles.back_arrow_img} />
        </Pressable>

        <View  style={styles.coinAndGameHubTextContainer}>
            {/* game hub header text */}
            <Text style={styles.GameHubText}>Game Hub</Text>

            {/* coin and coin name */}
                <View style={styles.coinContainer}>
                    <Image source={require('../../assets/games/45-32-Coin.png')} style={styles.coinImage} />
                    <Text style={styles.coinTitle}>$Coins</Text>
                </View>
        </View>

        <View style={styles.corgiEscapeContainer}>
            <Image source={require('../../assets/scale5doggo.png')} style={styles.doggoImage} />
            <Text style={styles.CorgiEscapeText} >Corgi Escape</Text>
            <Link href="/gamehub/corgi_escape_tutorial" asChild>
                <Pressable style={styles.button} onPressCorgiEscapeTutorial={onPressCorgiEscapeTutorial}>
                    <Text style={styles.text}>{corgiEscapeTutorialBtn}</Text>
                </Pressable>
            </Link>
            <Link href="/gamehub/corgi_escape" asChild>
                <Pressable style={styles.button} onPressCorgiEscapeStart={onPressCorgiEscapeStart}>
                    <Text style={styles.text}>{corgiEscapeStartBtn}</Text>
                </Pressable>
            </Link>
            <Link href="/gamehub/test" asChild>
                <Pressable style={styles.button} onPressCorgiEscapeStart={onPresstest}>
                    <Text style={styles.text}>{testStartBtn}</Text>
                </Pressable>
            </Link>
        </View>
        

        <View style={styles.treatFallsContainer}>
            <Image source={require('../../assets/games/Dog_biscuit.png')} style={styles.treatFallsImage} />
            <Text style={styles.TreatFallsText}>Treat Falls</Text>
            <Link href="/gamehub/treat_falls_tutorial" asChild>
                <Pressable style={styles.button} onPressTreatFallsTutorial={onPressTreatFallsTutorial}>
                    <Text style={styles.text}>{treatFallsTutorialBtn}</Text>
                </Pressable>
            </Link>

            <Link href="/gamehub/treat_falls" asChild>
                <Pressable style={styles.button} onPressTreatFallsStart={onPressTreatFallsStart}>
                    <Text style={styles.text}>{treatFallsStartBtn}</Text>
                </Pressable>
            </Link>
        </View>

    </View>

  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',       
        backgroundColor: '#A7C7E7',
        ...StyleSheet.absoluteFillObject
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
    },
    corgiEscapeContainer: {
        alignItems: 'center',
    },
    treatFallsContainer:{
        alignItems: 'center'
    },
    indexButton:{
        backgroundColor: '#FAC898',
        width: 175, 
        padding: 10,
        borderRadius: 5,
        marginVertical: 10, 
        alignItems: 'center'
    },
    button: {
        width: 175, // Set a fixed width or use maxWidth
        padding: 10,
        backgroundColor: '#f7e7b4',
        borderRadius: 5,
        marginVertical: 10, 
        alignItems: 'center'
    },
    text: {
        color: '#000000',
        fontSize: 16,
        fontFamily: 'EBGaramond_800ExtraBold'
    },
    GameHubText: {
        fontSize: 40,
        fontFamily: 'EBGaramond_800ExtraBold'
        
    },
    CorgiEscapeText:{
        fontSize: 25,
        fontFamily: 'EBGaramond_600SemiBold'
    },
    TreatFallsText:{
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'EBGaramond_600SemiBold',
    },
    coinImage: {
        width: 70, 
        height: 70, 
        
    },
    doggoImage: {
        width: 125, 
        height: 125,
    },
    treatFallsImage:{
        width: 100, 
        height: 100,
    },

    coinTitle: {
        fontSize: 14,
        color: '#000000',
        textAlign: 'center',
        marginTop: 0,
        fontFamily: 'EBGaramond_600SemiBold'
    },
    coinAndGameHubTextContainer: {
        top: 35,
       flexDirection: 'row', 
       alignItems: 'center', 
    },
    coinContainer: {
        alignItems: 'center', // Center align the image and title within the container
    },
    back_arrow_img: {
        position: 'absolute',
        top: 20,
        left: 20,
        width: 75,
        height: 75,
      },

  });