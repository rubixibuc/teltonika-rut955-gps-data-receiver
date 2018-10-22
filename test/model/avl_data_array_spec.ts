'use strict'

import * as chai from 'chai'
import { DataBuffer } from '../../src/model/data_buffer'
import { AVLDataArray } from '../../src/model/avl_data_array'

const expect = chai.expect

describe('AVLDataArray', () => {
  describe('readNew', () => {
    const testDataBuffer = new DataBuffer(Buffer.from('08200000016575891210000613186a21768555001b000708000000010115030000000000016575892598000613186a21768554001b000708000000010115030000000000016575893920000613186c21768556001b000706000000010115030000000000016575894ca8000613187421768557001b000706000000010115030000000000016575896030000613187b21768557001b0007070000000101150300000000000165758973b8000613187b21768556001b000706000000010115030000000000016575898740000613187921768553001b000705000000010115030000000000016575899ac8000613187821768550001b00070600000001011503000000000001657589ae5000061318782176854b001b00070800000001011503000000000001657589c1d8000613187421768549001b00070800000001011503000000000001657589d560000613187221768548001a00070800000001011503000000000001657589e8e8000613187021768546001a00070800000001011503000000000001657589fc70000613187021768544001a0007080000000101150300000000000165758a0ff8000613187021768543001b0007080000000101150300000000000165758a2380000613186e21768542001b0007080000000101150300000000000165758a3708000613186d21768540001b0007080000000101150300000000000165758a4a90000613186c2176853d001b0007080000000101150300000000000165758a5e1800061318672176853b001b0007080000000101150300000000000165758a71a0000613185a21768537001b0007070000000101150300000000000165758a8528000613184c21768534001b0007070000000101150300000000000165758a98b0000613183e21768530001b0007070000000101150300000000000165758aac3800061318302176852c001b0007080000000101150300000000000165758abfc0000613182321768528001b0007070000000101150300000000000165758ad348000613181621768523001b0007080000000101150300000000000165758ae6d0000613180b2176851c001b0007080000000101150300000000000165758afa58000613180021768515001b0007070000000101150300000000000165758b0de0000613183721768529001a0007080000000101150300000000000165758b216800061318562176852f00190007070000000101150300000000000165758b34f000061318542176852b00190007070000000101150300000000000165758b4878000613184c2176852800190007070000000101150300000000000165758b543000061318202176850e00190103070000000101150300000000000165758b63d0000613187f2176848800180165070001000101150300000020', 'hex'))
    const parsedAvlDataArray = AVLDataArray.readNew(testDataBuffer)

    it('should parse the codec ID correctly', () => {
      return expect(parsedAvlDataArray.codecId).to.be.eql(8)
    })

    it('should parse the data getLength correctly', () => {
      return expect(parsedAvlDataArray.avlDataLength).to.be.eql(32)
    })

    it('should parse the array of AVLData packets correctly and avlDatas should contain the number of elements from avlDataLength', () => {
      return expect(parsedAvlDataArray.avlDatas.length).to.be.eql(parsedAvlDataArray.avlDataLength)
    })

    it('should return null if the ending length does not match', () => {
      const testDataBuffer = new DataBuffer(Buffer.from('08200000016575891210000613186a21768555001b000708000000010115030000000000016575892598000613186a21768554001b000708000000010115030000000000016575893920000613186c21768556001b000706000000010115030000000000016575894ca8000613187421768557001b000706000000010115030000000000016575896030000613187b21768557001b0007070000000101150300000000000165758973b8000613187b21768556001b000706000000010115030000000000016575898740000613187921768553001b000705000000010115030000000000016575899ac8000613187821768550001b00070600000001011503000000000001657589ae5000061318782176854b001b00070800000001011503000000000001657589c1d8000613187421768549001b00070800000001011503000000000001657589d560000613187221768548001a00070800000001011503000000000001657589e8e8000613187021768546001a00070800000001011503000000000001657589fc70000613187021768544001a0007080000000101150300000000000165758a0ff8000613187021768543001b0007080000000101150300000000000165758a2380000613186e21768542001b0007080000000101150300000000000165758a3708000613186d21768540001b0007080000000101150300000000000165758a4a90000613186c2176853d001b0007080000000101150300000000000165758a5e1800061318672176853b001b0007080000000101150300000000000165758a71a0000613185a21768537001b0007070000000101150300000000000165758a8528000613184c21768534001b0007070000000101150300000000000165758a98b0000613183e21768530001b0007070000000101150300000000000165758aac3800061318302176852c001b0007080000000101150300000000000165758abfc0000613182321768528001b0007070000000101150300000000000165758ad348000613181621768523001b0007080000000101150300000000000165758ae6d0000613180b2176851c001b0007080000000101150300000000000165758afa58000613180021768515001b0007070000000101150300000000000165758b0de0000613183721768529001a0007080000000101150300000000000165758b216800061318562176852f00190007070000000101150300000000000165758b34f000061318542176852b00190007070000000101150300000000000165758b4878000613184c2176852800190007070000000101150300000000000165758b543000061318202176850e00190103070000000101150300000000000165758b63d0000613187f2176848800180165070001000101150300000010', 'hex'))
      const parsedAvlDataArray = AVLDataArray.readNew(testDataBuffer)
      return expect(parsedAvlDataArray).to.be.null
    })
  })
})
