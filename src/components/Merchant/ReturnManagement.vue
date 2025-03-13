<!-- ReturnManagement.vue -->
<template>
  <view class="return-management">
    <view class="return-list">
      <view v-for="item in returns" :key="item.id" class="return-item">
        <view class="return-info">
          <text class="product-name">商品: {{ item.productName }} (ID: {{ item.productId }})</text>
          <text class="quantity">数量: {{ item.quantity }}</text>
          <text class="reason">原因: {{ item.reason }}</text>
          <text
            :class="{'status-pending': item.status === 'pending', 'status-approved': item.status === 'approved', 'status-rejected': item.status === 'rejected'}">
            状态: {{ statusMap[item.status] }}
          </text>
        </view>
        <view class="actions" v-if="item.status === 'pending'">
          <nut-button type="success" size="small" @click="handleResolve(item.id, 'approved')">同意</nut-button>
          <nut-button type="danger" size="small" @click="handleResolve(item.id, 'rejected')">拒绝</nut-button>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import {defineProps, defineEmits, toRefs, computed, onMounted} from 'vue';

interface ReturnItem {
  id: number;
  productId: number;
  productName: string;
  quantity: number;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
}

interface Props {
  returns: ReturnItem[]
}

const props = defineProps<Props>();
const {returns} = toRefs(props)
const emit = defineEmits(['resolve']);

const statusMap = computed(() => {
  return {
    pending: '待处理',
    approved: '已同意',
    rejected: '已拒绝',
  }
})

const handleResolve = (returnId: number, newStatus: 'approved' | 'rejected') => {
  emit('resolve', returnId, newStatus);
};

onMounted(() => {
  console.log(props)
})

</script>

<style lang="scss">
.return-management {
  padding: 10px;

  .return-list {
    .return-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      border-bottom: 1px solid #eee;

      .return-info {
        display: flex;
        flex-direction: column;

        .product-name {
          font-weight: bold;
          margin-bottom: 5px;
        }

        .quantity, .reason {
          margin-bottom: 5px;
        }

        .status-pending {
          color: orange;
        }

        .status-approved {
          color: green;
        }

        .status-rejected {
          color: red;
        }
      }

      .actions {
        display: flex;
        gap: 5px;
      }
    }
  }
}
</style>
