import { useState } from 'react'

import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'

export default function WishList() {
  const [items, setItems] = useState(['本', '車'])
  const [newItem, setNewItem] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div>
      <h1>欲しいものリスト</h1>
      <Stack spacing={2}>
        <div>
          <TextField
            label='New item'
            value={newItem}
            onChange={(event) => {
              setNewItem(event.target.value)
            }}
          />
          <Button
            variant='outlined'
            onClick={() => {
              setItems([newItem, ...items])
              setNewItem('')
            }}
          >
            追加
          </Button>
        </div>
        <div>
          <TextField
            label={
              <>
                <SearchIcon /> 検索
              </>
            }
            value={searchQuery}
            onChange={(event) => {
              setSearchQuery(event.target.value)
            }}
          />
        </div>
        {items
          .filter((item) => {
            if (searchQuery === '') {
              return true
            }

            return item.includes(searchQuery)
          })
          .map((item) => (
            <Card key={item}>
              <CardContent>{item}</CardContent>
            </Card>
          ))}
      </Stack>
    </div>
  )
}
