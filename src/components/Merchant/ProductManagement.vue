<template>
  <view class="product-management">
    <view class="add-product-form">
      <nut-form :model-value="newProduct">
        <nut-form-item label="商品名称">
          <nut-input v-model="newProduct.name" placeholder="请输入商品名称" clearable/>
        </nut-form-item>
        <nut-form-item label="价格">
          <nut-input v-model.number="newProduct.price" type="digit" placeholder="请输入价格" clearable/>
        </nut-form-item>
        <nut-form-item label="库存">
          <nut-input v-model.number="newProduct.stock" type="number" placeholder="请输入库存数量" clearable/>
        </nut-form-item>
      </nut-form>
      <nut-button type="primary" @click="handleAddProduct" :disabled="!isFormValid">添加商品</nut-button>
    </view>


    <view class="product-list">
      <view v-for="product in products" :key="product.id" class="product-item">
        <text class="product-name">{{ product.name }}</text>
        <text class="product-price">￥{{ product.price }}</text>
        <text class="product-stock">库存: {{ product.stock }}</text>
        <view class="actions">
          <nut-button type="primary" size="small" @click="editProduct(product)">编辑</nut-button>
          <nut-button type="danger" size="small" @click="confirmDelete(product.id)">删除</nut-button>
        </view>
      </view>
    </view>

    <!-- Edit Product Dialog -->
    <nut-dialog
      v-model:visible="showEditDialog"
      title="编辑商品"
      :content-style="{'padding':'8px'}"
      @ok="handleUpdateProduct"
      @cancel="showEditDialog = false"
    >
      <template #default>
        <nut-form :model-value="editingProduct">
          <nut-form-item label="商品名称">
            <nut-input v-model="editingProduct.name" placeholder="请输入商品名称" clearable/>
          </nut-form-item>
          <nut-form-item label="价格">
            <nut-input v-model.number="editingProduct.price" type="digit" placeholder="请输入价格" clearable/>
          </nut-form-item>
          <nut-form-item label="库存">
            <nut-input v-model.number="editingProduct.stock" type="number" placeholder="请输入库存" clearable/>
          </nut-form-item>
        </nut-form>
      </template>
    </nut-dialog>
    <!-- Confirm Delete Dialog -->
    <nut-dialog
      v-model:visible="showDeleteConfirm"
      title="确认删除"
      :content-style="{padding:'8px'}"
      content="确定要删除该商品吗？"
      @ok="handleDeleteProduct"
      @cancel="showDeleteConfirm = false"
    />
  </view>
</template>

<script setup lang="ts">
import {ref, reactive, computed, toRefs, onMounted} from 'vue';

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface Props {
  products: Product[]
}

const props = defineProps<Props>()
const emit = defineEmits(['add', 'update', 'delete'])

const {products} = toRefs(props)


// --- Add Product ---
const newProduct = reactive<Omit<Product, 'id'>>({
  name: '',
  price: 0,
  stock: 0,
});

const isFormValid = computed(() => {
  return newProduct.name.trim() !== '' && newProduct.price > 0 && newProduct.stock > 0;
});

const handleAddProduct = () => {
  if (!isFormValid.value) return
  emit('add', {...newProduct}); // Emit the new product
  // Reset the form
  newProduct.name = '';
  newProduct.price = 0;
  newProduct.stock = 0;
};

// --- Edit Product ---
const showEditDialog = ref(false);
const editingProduct = reactive<Product>({
  id: 0,
  name: '',
  price: 0,
  stock: 0,
});

const editProduct = (product: Product) => {
  Object.assign(editingProduct, product); // Copy product data to editingProduct
  showEditDialog.value = true;
};

const handleUpdateProduct = () => {
  emit('update', {...editingProduct}); // Emit updated product
  showEditDialog.value = false;
};

// --- Delete Product ---
const showDeleteConfirm = ref(false);
const productIdToDelete = ref<number | null>(null);
const confirmDelete = (productId: number) => {
  productIdToDelete.value = productId
  showDeleteConfirm.value = true
}
const handleDeleteProduct = () => {
  if (productIdToDelete.value !== null) {
    emit('delete', productIdToDelete.value);
  }
  showDeleteConfirm.value = false;
};

onMounted(() => {
  console.log(props)
})

</script>

<style lang="scss">
.product-management {
  padding: 10px;

  .add-product-form {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 5px;
  }

  .product-list {
    .product-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      border-bottom: 1px solid #eee;

      .product-name {
        font-weight: bold;
        margin-right: 10px;
      }

      .product-price {
        margin-right: 10px;
        color: red;
      }

      .product-stock {
        margin-right: 10px;
      }

      .actions {
        display: flex;
        gap: 5px;
      }
    }
  }
}
</style>
