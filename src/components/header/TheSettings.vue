<script setup>
import { getAlertManager } from '@/store/ManagerAlert';
import { getSettingsManager } from '@/store/ManagerSettings';
import { getGameState } from '@/store/GameState';

const { gameData } = getGameState();
const sm = getSettingsManager();

function handleCheckbox(key) {
    if (sm.settings[key][0] || gameData.finished || gameData.rows.length === 0) {
        sm.enableSetting(key);
    } else {
        getAlertManager().handleAlert("Cannot be Toggled as Game is in Progress")
    }
}

</script>

<template>
    <div id="settings">
        <div class="title">
            Settings
        </div>

        <span id="mode">
            <div class="wrapper">
                <div class="setting">Masochist Mode</div>
                <div>
                    Removes all the 'fun' from the game by introducing a two minute timer.
                    Word games have never been more stressful.
                </div>
            </div>
            <label class="switch" :class="{'active': sm.settings['mmode'][0]}">
                <input type="checkbox" @change="handleCheckbox('mmode')">
                <span class='slider' :class="sm.settings['mmode'][0] ? 'slider-right' : 'slider-left'" ></span>
            </label>
        </span>

        <!-- <span id="mode">
            <div class="wrapper">
                <div class="setting">Dark Mode</div>
            </div>
            <label class="switch" :class="{'active': sm.enabled[1]}">
                <input type="checkbox" @change="sm.enableSetting(1)">
                <span class='slider' :class="sm.enabled[1] ? 'slider-right' : 'slider-left'" ></span>
            </label>
        </span> -->
       
    </div>
</template>

<style scoped>
    #settings {
        font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
        font-size: 1.1rem;
        margin: 2.5rem 1.5rem 2.5rem 2rem;
        display: block;
        height: min-content;
    }

    .title {
        font-size: 2.8rem;
        letter-spacing: 0.2rem;
        height: 6rem;
    }

    .wrapper {
        margin-right: 2rem;
    }

    #mode {
        height: 7rem;
        align-items: center;
    }

    .setting {
        font-size: 1.8rem;
        padding-bottom: 0.3rem;
    }

    span {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .switch {
        position: relative;
        display: inline-block;
        min-width: 5rem;
        height: 2.8rem;
        border: 2px solid white;
        border-radius: 34px;
        background-position: left;
        background: linear-gradient(45deg, #ccc 15%, #afa 60%, #4b4 100%); 
        background-size: 500%;
        transition: all 300ms cubic-bezier(0.76, 0.01, 0.15, 0.97);
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        border: none;
        border-radius: 50%;
        height: 2.3rem;
        width: 2.3rem;
        background-color: white;
        transition: all 300ms cubic-bezier(0.76, 0.01, 0.15, 0.97);
    }

    .slider-left {
        box-shadow: 4px 0 4px rgba(10, 10, 10, 0.1);
        left: 0.25rem;
        bottom: 0.25rem;
    }

    .slider-right {
        left: 0.25rem;
        bottom: 0.25rem;
        box-shadow: -4px 0 4px rgba(10, 10, 10, 0.1);
        transform: translateX(2.2rem);
    }

    .active {
        border: 2px solid #afa;
        background-position: right;
    }

</style>@/store/ManagerAlert