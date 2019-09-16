"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
Block.validateStructure = (aBlock) => typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.data === "string" &&
    typeof aBlock.timestamp === "number";
const genesisBlock = new Block(0, "12313020202", "", "Hello", 123465);
let blockChain = [genesisBlock];
const getBlockChain = () => blockChain;
const getLatestBlock = () => blockChain[blockChain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimestamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    addBlock(newBlock);
    return newBlock;
};
const getHashforBlock = (aBlock) => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);
const isNewBlockValid = (candidateBlock, previousBlock) => {
    if (!Block.validateStructure(candidateBlock)) {
        console.log("validateStructure err");
        return false;
    }
    else if (previousBlock.index + 1 !== candidateBlock.index) {
        console.log("index err");
        return false;
    }
    else if (previousBlock.hash !== candidateBlock.previousHash) {
        console.log("hash err");
        return false;
    }
    else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
        console.log("equal hash");
        return false;
    }
    else {
        return true;
    }
};
const addBlock = (candidateBlock) => {
    if (isNewBlockValid(candidateBlock, getLatestBlock())) {
        blockChain.push(candidateBlock);
    }
};
createNewBlock("second Block");
createNewBlock("third Block");
createNewBlock("fourth Block");
console.log(blockChain);
//# sourceMappingURL=index.js.map